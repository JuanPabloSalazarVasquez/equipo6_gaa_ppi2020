const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
host: 'basgphrtouk9ytdoz3ss-mysql.services.clever-cloud.com',
user:'u21visrzjabzzzwn',
password:'UgyzL1FTju7HFtQH6W21',
database: 'basgphrtouk9ytdoz3ss',
multiStatements: true
});

mysqlConnection.connect(function (err){
  if(err){
    console.log(err);
  }else{
    console.log('La base de datos está conectada')
  }
});

module.exports =  mysqlConnection;