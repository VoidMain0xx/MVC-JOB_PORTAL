import RegisterModel from "../models/Register.Model.js";
import ApplyModel from "../models/ApplyModel.js";
import jobsModel from "../models/jobsModel.js";
export default class registerController {


    getRegister(req, res) {
        return res.render('Register');
    }

    getLogin(req, res) {
        res.render('login', { errorMessage: null });
    }

    postLogin(req, res) {
        const { email, password } = req.body;
        const user = RegisterModel.isValidUser(email, password);
        if (!user) {
            return res.render('login', { errorMessage: 'Invalid Credentials', });
        }
        req.session.userEmail = email;
        var jobs = jobsModel.get();
        res.render('index', { jobs, userEmail: req.session.userEmail, });
    }


    postRegister(req, res) {
        const { email, username, password } = req.body;
        RegisterModel.add(email, username, password);
        res.render('login', { errorMessage: null });
    }
}