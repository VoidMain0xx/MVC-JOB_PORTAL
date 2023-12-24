// export default class RegisterModel {
//     constructor(email, username, password) {
//         this.email = email;
//         this.username = username;
//         this.password = password;
//     }

//     static add(email, username, password) {
//         const newUser = new RegisterModel(
//             users.length + 1,
//             email,
//             username,
//             password
//         );
//         users.push(newUser);
//     }

//     static isValidUser(email, password) {
//         const user = users.find(
//             (u) => u.email === email && u.password === password
//         );
//         return user;



//     }
// }

//  var users = [];


export default class RegisterModel {
    constructor(email, username, password) {
        this.id = Date.now(); // Unique ID for each user
        this.email = email;
        this.username = username;
        this.password = password;
    }


    static add(email, username, password) {
        const newUser = new RegisterModel(email, username, password);
        console.log(newUser)
        users.push(newUser);
    }

    static isValidUser(email, password) {
        const user = users.find(
            (u) => u.email == email && u.password == password
        );
        console.log(user)
        return user;
    }
}

var users = []

