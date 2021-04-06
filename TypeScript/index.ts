let userArr:any = []

class Users {
    users: Map<any, any>;
    
    constructor() {
        this.users = new Map()
    }

    addUser(user: User) {
        userArr.push(
            user
        )
    }
}

class User {
    username;
    email;
    age;

    constructor(username: string, email: string, age: number) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    setUsername(username: string) {
        this.username = username;

        return this;
    }

    setEmail(email: string) {
        this.email = email;

        return this;
    }

    setAge(age: number) {
        this.age = age;

        return this;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getAge() {
        return this.age;
    }
    
    id() {
        return this.email + '-' + this.age + '.' + this.username;
    }
}

const users = new Users();

const owen = new User(
    "Owen",
    "owen@gmail.com",
    14
);
    
const bob = new User(
    "Bob",
    "bob@gmail.com",
    14
);

users.addUser(owen);
users.addUser(bob);

for (let i = 0; i < userArr.length; i++) {
    console.log(i + ":")
    console.log(userArr[i])
    console.log("\r\n")
}