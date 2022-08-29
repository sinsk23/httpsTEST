/* app.js */

require('dotenv').config();//.env 보안파일 환경변수 사용
const Router = require('./routes/index')
// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

//ejs 경로위한 path
const path = require('path');

//Certificate 인증서 경로
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/seongkyu-dean.shop/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/seongkyu-dean.shop/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/seongkyu-dean.shop/chain.pem', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

//ejs 세팅
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app실행시 라우터 사용 경로
app.use('/', Router);

//Starting both http & https servers
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(3000, () => {
	console.log('HTTP Server running on port 3000');
});

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');ap
// });