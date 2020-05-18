let appConfig = {};
let nodeMailer = {};

appConfig.port = 3100;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://localhost:27017/tracking'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="drunkxcoder@gmail.com";
nodeMailer.password = "Iamno1@@";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};