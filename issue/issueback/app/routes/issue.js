const express = require('express');
const router = express.Router();
const issueController = require("./../controllers/issueController");
const notifyController = require("./../controllers/notifyController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
const multer = require('./../middlewares/multer');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issue`;


    app.post(`${baseUrl}/create`, multer.upload.single('image'), issueController.createIssue);
    
    app.get(`${baseUrl}/all`, auth.isAuthorized, issueController.getAllIssue);
     
    app.get(`${baseUrl}/:description/search`, auth.isAuthorized, issueController.searchIssue);

    app.get(`${baseUrl}/:issueId/view`, auth.isAuthorized, issueController.getIssueById);
  
    app.post(`${baseUrl}/:issueId/addComment`, auth.isAuthorized, issueController.addComment);

    app.post(`${baseUrl}/:issueId/addAssignee`, auth.isAuthorized, issueController.addAssignee);

    app.post(`${baseUrl}/:issueId/addWatchee`, auth.isAuthorized, issueController.addWatchee);

    app.post(`${baseUrl}/:issueId/delete` , auth.isAuthorized ,issueController.deleteIssue);

    app.post(`${baseUrl}/:issueId/edit`, multer.upload.single('image'), issueController.editIssue);

    app.get(`${baseUrl}/:userId/notification`, auth.isAuthorized, notifyController.getNotifyById);
}