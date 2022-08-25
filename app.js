/* app.js */

// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate 인증서 경로
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/도메인 입력/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/도메인 입력/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/도메인 입력/chain.pem', 'utf8');

// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

app.use((req, res) => {
	res.send('Hello Http !');
});

// Starting both http & https servers
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });