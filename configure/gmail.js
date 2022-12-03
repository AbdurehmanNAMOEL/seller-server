const nodeMailer = require('nodemailer')

const sendEmail=(userEmail,userId)=>{
let link=`https://ethiomineral.netlify.app/password/${userId}`
const transport = nodeMailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.GMAIL_PASSWORD
    }
})

const mail_config={
    from:process.env.EMAIL,
    to:userEmail,
    subject:"RestPassword",
    text:link
}
transport.sendMail(mail_config,(err,info)=>{
    if(err){
        console.log(err);
    }else console.log('email is sent'+info.response);
})

}

module.exports=sendEmail