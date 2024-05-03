const transporter = require("../config/email")
const errorHandler = require("../config/error")
const Contact = require("../models/contact.model")


module.exports = {
    addContact: async(req,res,next) => {
        const postData = req.body

        try {
            const {email} = postData

            if(!email){
                next(errorHandler(404, "Email is not provided"))
            }

            new Contact({email}).save()
            .then(response => {
                const mailOptions = {
                    from: 'sabil.danish1997@gmail.com',
                    to: email,
                    subject: 'Email Received',
                    html: '<h1>Your Email is Received</h1><p>We have received your email: ' + email + '</p>'
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log({errorcheck: error});
                        next(error)
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(201).json({success: true, message: "You have successfully subscribed to our newsletter services"});
                    }
                });
            }).catch(err => {
                next(err)
            })

        } catch (error) {
            next(error)
        }
    }
}