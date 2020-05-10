const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const tokenLib = require("./tokenLib.js");
const NotifyModel = mongoose.model('Notify');

let setServer = (server) => {

    let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('')

    myIo.on('connection', (socket) => {

        socket.emit("verifyUser", "Some data");

        socket.on('set-user', (authToken) => {

            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {

                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else {

                    console.log("user is verified..setting details");
                    let currentUser = user.data;
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} has Logged in successfully`);

                    let userObject = { userId: currentUser.userId, fullName: fullName }
                    allOnlineUsers.push(userObject);
                    console.log(allOnlineUsers);

                    socket.room = 'edChat'
                    socket.join(socket.room)
                    myIo.emit('online-user-list', allOnlineUsers);

                }


            })

        }) 

        socket.on('disconnect', () => {
           

            console.log('\x1b[33m',"user is disconnected", '\x1b[0m');
            console.log(socket.userId);


            var removeIndex = allOnlineUsers.map(function (user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex, 1)

            console.log('\x1b[36m', allOnlineUsers, '\x1b[0m');

            socket.leave(socket.room)
            socket.to(socket.room).broadcast.emit('online-user-list', allOnlineUsers);


        }) 
        socket.on('notify', (data) => {

            data['notifyId'] = shortid.generate()

           
            setTimeout(function () {
                eventEmitter.emit('save-notify', data);

            }, 2000)
            myIo.emit(data.receiverId, data)

        });

    });

}



eventEmitter.on('save-notify', (data) => {

    

    let newNotify = new NotifyModel({

        notifyId: data.notifyId,
        senderName: data.senderName,
        senderId: data.senderId,
        receiverName: data.receiverName || '',
        receiverId: data.receiverId || '',
        issueId: data.issueId,
        message: data.message,
        createdOn: data.createdOn

    });

    newNotify.save((err, result) => {
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("Notify Is Not Saved.");
        }
        else {
            console.log("Notify Saved.");
        }
    });

}); 


module.exports = {
    setServer: setServer
}