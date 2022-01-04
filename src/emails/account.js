const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeMail = (email, name) => {
     sgMail.send({
       to: email,
       from: "vaibh.garg.3010@gmail.com",
       subject: "Thank for joining in!",
       text: `Welcome to the app,${name}. Let me know how you get along with the app`,
     });
}

const sendDeleteMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vaibh.garg.3010@gmail.com',
        subject: 'Sorry to see you go',
        text:`Goodby ${name}.I hope to see you back sometme soon`
    })
}


module.exports = {
    sendWelcomeMail,
    sendDeleteMail
}