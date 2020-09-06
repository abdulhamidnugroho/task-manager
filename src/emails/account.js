const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abdulhamidnugroho@gmail.com',
        subject: 'Thanks for sign up',
        text: `Welcome to the app, ${name} . Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abdulhamidnugroho@gmail.com',
        subject: 'Sorry to see you go',
        text: `Bye ${name} , I hope to see you back again soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}