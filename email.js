const fs = require('fs');
const path = require('path');
const sendMail = require('./gmail');

const main = async () => {
  const fileAttachments = [
   
    {
      filename: 'websites.pdf',
      path: 'https://www.labnol.org/files/cool-websites.pdf',
    },
	{
		filename: 'VHDL.pdf',
		path: '/Users/trijr/Desktop/VHDL.pdf'
		
	  }
	
  ];

  const options = {
    to:"abhinav.j@sheru.se" ,
    //cc: 'cc1@example.com',
    //replyTo: 'amit@lorg',
    subject: 'Hello sir  🚀',
    text: 'this email is sent from the command line',
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from Sheru</p>`,
    attachments: fileAttachments,
    textEncoding: 'base64',
    
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message was sent successfully:', messageId))
  .catch((err) => console.error(err));