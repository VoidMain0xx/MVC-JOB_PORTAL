import nodemailer from 'nodemailer';

const transporter =  nodemailer.createTransport({
    service : 'gmail', 
        auth: {
            user : 'codingninjas2k16@gmail.com',
            pass : 'slwvvlczduktvhdj'
        }
});

 export default function mailSent(email){
    const mailOption = {
        from : 'codingninjas2k16@gmail.com',
        to: email,
        subject : 'Applied for job from coding ninja portal is successful',
        text : 'I wanted to inform you that we have received your application and it is currently under review by our hiring team. We carefully assess each candidates qualifications and fit for the role, and we are committed to ensuring a fair and thorough evaluation proces Our team will be reviewing all applications over the next [Timeline for Review, e.g., "few weeks"], and we will reach out to candidates who best match the qualifications and requirements of the position to schedule interviews. If you are selected for an interview, you will receive further communication from us with details on the next steps. Please feel free to reach out to us at codingninjas2k16@gmail.com if you have any specific questions about your application or the recruitment process. We appreciate your patience and understanding as we move through the selection process.'
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOption, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
}