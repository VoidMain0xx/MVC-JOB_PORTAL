export default class jobsModel {
    constructor(ID, COMPANY, DESIGNATION, DESC, IMAGE) {
        this.id = ID;
        this.company = COMPANY;
        this.designation = DESIGNATION;
        this.desc = DESC; 
        this.image = IMAGE; 
    }

    static get(){
        return jobs;
    }

    static updateChanges(jobObj){
        const index = jobs.findIndex((p) => p.id == jobObj.id);
        jobs[index] = jobObj;
    }

    static add(jobObj){
        const newJob = new jobsModel( parseInt(jobs.length +  1),
            jobObj.company , 
            jobObj.designation , 
            jobObj.desc ,
            jobObj.image );
            
        jobs.push(newJob);
    }

    static getByID(id){
        return jobs.find((p) => p.id == id);
    }

    static delete(id){
        const index = jobs.findIndex((p) => p.id == id );
        jobs.splice(index , 1);
    } 
}

var jobs  = [
    new jobsModel ( 1 , 'infosys' , 'data analyst', 'require strong knowledge in python' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png' ),

    new jobsModel ( 2 , 'infosys' , 'CIS', 'require strong knowledge in AWS ,kubernet' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png' )
] 