const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('./credentials.json');

// Replace with the code you received from Google
const code = '4/0AWtgzh5cnqwKMQCetP7ZFqGehu1ynZZq8R2VAkwaufdZ3L1mzeHrNRP9QdubsezjBEZBEQ';
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

oAuth2Client.getToken(code).then(({ tokens }) => {
  const tokenPath = path.join(__dirname, 'tokens.json');
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  console.log('Access token and refresh token stored to token.json'); //access token will expire every1 hour but refreshed token will be used
});
//http://localhost/?code=4/0AWtgzh5cnqwKMQCetP7ZFqGehu1ynZZq8R2VAkwaufdZ3L1mzeHrNRP9QdubsezjBEZBEQ&scope=https://www.googleapis.com/auth/gmail.send