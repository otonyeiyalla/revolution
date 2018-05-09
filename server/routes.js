var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'teamrevolution247@gmail.com',
        pass: 'Revolutio247'
    }
});

//change codes below
exports.registration = function(req, res) {
    //put email code
    var {body} = req;
   var contents = "Name: " + body.name  + "\n Email: " + body.email + "\n Phone Number: " + body.phoneNumber +
   "\n Size: " + body.size + "\n Location: " + body.location;

    var mailOptions = {
        from: 'teamrevolution247@gmail.com',
        to: 'otonyeiyalla@gmail.com',
        subject: 'Registration for Revolution',
        text: contents

    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    console.log(body);
    res.sendStatus(200);

};

exports.feedback = function(req, res) {
    //put email code

    var {body} = req;
    var contents = "Name: " + body.name  + "\n Email: " + body.email + "\n Comment: " + body.comment;

    var mailOptions = {
        from: 'teamrevolution247@gmail.com',
        to: 'otonyeiyalla@gmail.com',
        subject: 'Feedback for Revolution',
        text: contents

    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    console.log(body);
    res.sendStatus(200);
};