export default class ApplyModel{
    constructor(id, jobid,  contact, email, image) {
        this.id = id;
        this.jobid = jobid
        this.contact = contact;
        this.email = email;
        this.image = image;
    }
 
    static get(){
        return applicants;
    }

    static add(jobid , contact , email , image){
        const newApplicant = new ApplyModel(
            applicants.length + 1 ,
            jobid , contact , email , image
        );
        applicants.push(newApplicant)
        console.log(applicants)
    }
}


var applicants = [
    new ApplyModel(1, 1 , '1234567890' , 'ironman@starkIndustries.com' , 'https://preview.redd.it/iron-man-vs-batman-who-would-you-hire-v0-g32bomi0kika1.png?width=640&crop=smart&auto=webp&s=4f1bb76a0aaff522cadb4fefb9c728e256fb36f0' ),

    new ApplyModel( 2 , 1 , '1234567890' , 'ironman@starkIndustries.com' , 'https://preview.redd.it/iron-man-vs-batman-who-would-you-hire-v0-g32bomi0kika1.png?width=640&crop=smart&auto=webp&s=4f1bb76a0aaff522cadb4fefb9c728e256fb36f0' ) 

]