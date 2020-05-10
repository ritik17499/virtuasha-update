const express = require('express');
const router = express.Router();
const chatController = require("./../../app/controllers/chatController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

  let baseUrl = `${appConfig.apiVersion}/group`;


  // params: Group Name
  app.post(`${baseUrl}/createGroup`, auth.isAuthorized, chatController.createGroup);
  /**
    * @apiGroup Group
    * @apiVersion  1.0.0
    * @api {post} /api/v1/group/createGroup Create Group.
    *
    * @apiParam {string} name Name of the Group. (body params) (required)
    * @apiParam {string} creator Name of the Group Creator. (body params) (required)
    * @apiParam {string} authToken Authorization Token of user. (query params) (required)
    
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {json} Success-Response:
       {
        "error": false,
        "message": "Chat Room created",
        "status": 200,
        "data": {
            "roomId": String,
            "roomName": String,
            "creator": String,
            "active": Boolean,
            "createdOn": Date,
            "ModifiedOn": Date,
            "_id": String,
            "__v": 0
          }
        }
        @apiErrorExample {json} Error-Response:
          *
          {
          "error": true,
          "message": "Invalid Or Expired AuthorizationKey",
          "status": 404,
          "data": null
        }
   */

  app.get(`${baseUrl}/getChatGroup`, auth.isAuthorized, chatController.getChatGroup);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {get} /api/v1/group/getChatGroup Get all Groups.
     
     * @apiParam {string} authToken Authorization Token of user. (query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "All Group Chats Details Found",
            "status": 200,
            "data": [
              {
                  "roomId": String,
                  "roomName": String,
                  "creator": String,
                  "active": Boolean,
                  "createdOn": Date,
                  "ModifiedOn": Date,
              },
              {
                  "roomId": String,
                  "roomName": String,
                  "creator": String,
                  "active": Boolean,
                  "createdOn": Date,
                  "ModifiedOn": Date,
                }
              ]
        }
        @apiErrorExample {json} Error-Response:
          *
          {
            "error": true,
            "message": "Invalid Or Expired AuthorizationKey",
            "status": 404,
            "data": null
          }
    */

  app.get(`${baseUrl}/chat/get/for/group`, auth.isAuthorized, chatController.getChatsForGroup);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {get} /api/v1/group/chat/get/for/group Get group chats.
     
     * @apiParam {string} authToken Authorization Token of user. (query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
        {
          "error": false,
          "message": "All Chats Listed",
          "status": 200,
          "data": [
              {
                  "senderName": String,
                  "senderId": String,
                  "receiverName": String,
                  "receiverId": String,
                  "message": String,
                  "chatId": String,
                  "createdOn": Date,
                  "modifiedOn": Date
              },
              {
                  "senderName": String,
                  "senderId": String,
                  "receiverName": String,
                  "receiverId": String,
                  "message": String,
                  "chatId": String,
                  "createdOn": Date,
                  "modifiedOn": Date
              }
          ]
        }
        @apiErrorExample {json} Error-Response:
          *
        {
          "error": true,
          "message": "Invalid Or Expired AuthorizationKey",
          "status": 404,
          "data": null
        }
    */

  app.post(`${baseUrl}/shareLink`, auth.isAuthorized, chatController.shareLink);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/shareLink Share link of Group.
     *
     * @apiParam {string} authToken Authorization Token of user. (query params) (required)
     * @apiParam {string} email Email of the user to whom you want to share your Group link. (body params) (required)
     * @apiParam {string} chatRoomId Id of Room . (body params) (required)
       @apiParam {string} chatRoomName Name of Room . (body params) (required)
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
        {
          "error": false,
          "message": "Mail Sent Successful",
          "status": 200,
          "data": null
        }
        @apiErrorExample {json} Error-Response:
    *
      {
        "error": true,
        "message": "Invalid Or Expired AuthorizationKey",
        "status": 404,
        "data": null
      }
    */



  app.put(`${baseUrl}/:roomId/markAsClose`, auth.isAuthorized, chatController.closeGroup);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {put} /api/v1/group/:roomId/markAsClose Close Group.
     *
     * @apiParam {string} authToken Authorization Token of user. (query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
          {
            "error": false,
            "message": "Chat Room has been marked as close",
            "status": 200,
            "data": null
          }
     @apiErrorExample {json} Error-Response:
     *
     * {
          "error": true,
          "message": "No Chat Room Found!",
          "status": 404,
          "data": null
      }
    */

  app.put(`${baseUrl}/:roomId/editGroup`, auth.isAuthorized, chatController.editGroup);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {put} /api/v1/group/:roomId/editGroup Edit Group.
     *
     *  @apiParam {string} authToken Authorization Token of user. (query params) (required)
     *  @apiParam {string} name Name of the Group. (body params) (required)
     *  @apiParam {string} chatRoomId Id of the Group. (Pass in url) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
          {
            "error": false,
            "message": "Updated successfully!",
            "status": 200,
            "data": {
                    "roomId": String,
                    "roomName": String,
                    "creator": String,
                    "active": Boolean,
                    "createdOn": Date,
                    "ModifiedOn": Date,
                "_id": String,
                "__v": 0
              }
            }
  
        @apiErrorExample {json} Error-Response:
        *
        * {
            "error": true,
            "message": "No Chat Room Found!",
            "status": 404,
            "data": null
          }
    */


  app.post(`${baseUrl}/:roomId/deleteGroup`, auth.isAuthorized, chatController.deleteGroup);
  /**
     * @apiGroup Group
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:roomId/deleteGroup Delete Group.
     *
     * 
     * @apiParam {string} authToken Authorization Token of user. (query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
         {
            "error": false,
            "message": "Deleted the chatRoom successfully",
            "status": 200,
            "data": null
          }
  
     @apiErrorExample {json} Error-Response:
     {
        "error": true,
        "message": "No ChatRoom Found",
        "status": 404,
        "data": null
      }

    */

}
