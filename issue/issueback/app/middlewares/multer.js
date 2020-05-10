const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require("fs");




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
		if (!fs.existsSync('./uploads/')) {
			fs.mkdirSync('./uploads/');
		}
		cb(null, './uploads/');
	},
    filename: function(req, file, cb) {
      var date = new Date();
      var timestamp = date.getTime();

      cb(null,  timestamp + "_" +file.originalname);
    }
  });

  
  const fileFilter = (req, file, cb) => {
    checkFileType(file, cb);
  };


function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    
    cb('Error: Images Only!');
  }
}
  
  const upload = multer({
    storage: storage,
    
  });

  module.exports={
      upload : upload
  }