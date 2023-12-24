import  express  from "express";
import jobsController from "./src/controllers/jobsController.js";
import ApplyController from "./src/controllers/ApplyController.js";
import registerController from "./src/controllers/registerController.js";
import path from 'path';
import ejsLayouts from "express-ejs-layouts";
import validationMiddleware from './src/middleware/VilidateMiddleWare.js';
import session from "express-session";
import { auth } from "./src/middleware/AuthMiddleware.js";

const server = express();

//setting up ejs
server.set("view engine" , 'ejs')
server.set("views" , path.join(path.resolve() , 'src' , 'views'))
server.use(ejsLayouts);
server.use(session({
    secret:'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false},
  }));

// encoding url

server.use(express.urlencoded({extended : true }));
server.use(express.json());

server.use(express.static('src/views'))

// creating instance
const jc = new jobsController()
const ac =  new ApplyController();
const rc = new registerController();


server.get('/' , jc.getJob )

server.get("/addjobs" , auth, jc.getAddForm);
server.get("/Register" , rc.getRegister); 
server.get('/login', rc.getLogin);
server.post('/login', rc.postLogin);
server.post('/Register' , rc.postRegister);
server.get("/applyJob" , ac.getForm)
server.post("/applyJob", ac.getEmail, ac.add);
server.post('/deleteJobs/:id', auth, jc.deleteJob);
server.get('/editJobs/:id',auth, jc.editJob)
server.post('/' , validationMiddleware ,auth, jc.addNewJob)
server.post('/editJobs/' ,auth, jc.jobUpdate); 



server.listen(3400 , console.log("the server is listed to 3400"));