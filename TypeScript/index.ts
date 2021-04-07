let userArr:any = []

class Users {
    users: Map<any, any>;
    
    constructor() {
        this.users = new Map();
    }

    addUser(user: User) {
        userArr.push(
            user
        );
    }

    getUser(id: number) {
        return userArr[id];
    }

    editUser(id: number, user: User) {
        userArr[id] = user;
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
    14,
);
    
const bob = new User(
    "Bob",
    "bob@gmail.com",
    14
);

const updateMe = new User(
    "UpdateMe",
    "update.me@gmail.com",
    100
)

users.addUser(owen);
users.addUser(bob);
users.addUser(updateMe);

for (let i = 0; i < userArr.length; i++) {
    console.log(i + ":", userArr[i], "\r\n");
}

console.log(`\r\nUser Searched:`, users.getUser(1));

const updated = new User(
    "Updated",
    "updated@gmail.com",
    101
);

users.editUser(2, updated);

const updatedId = 2;
console.log(`\r\nUpdated: ${updatedId}`, users.getUser(updatedId));
