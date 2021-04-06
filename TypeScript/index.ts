let userArr: any = [];   // Array for containing users
let id: number = 0;      // Beginning ID

class User {
    username: string;
    email: string;
    age: number;

    constructor(username: string, email: string, age: number) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    addUser() {
        userArr.push({
            id: id,
            username: this.username,
            email: this.email,
            age: this.age
        });
        id++;
    }
}

class UserEdit {
    id: number;
    field: string;
    value: string | number;

    constructor(id: number, field: string, value: string | number) {
        this.id = id;;
        this.field = field;
        this.value = value;
    }

    updateUser() {
        // if (this.field === "username") {
        //     userArr[this.id] = {
        //         id: userArr[this.id]["id"],
        //         username: this.value,
        //         email: userArr[this.id]["email"],
        //         age: userArr[this.id]["age"]
        //     }
        // } else if (this.field === "email") {
        //     userArr[this.id] = {
        //         id: userArr[this.id]["id"],
        //         username: userArr[this.id]["username"],
        //         email: this.value,
        //         age: userArr[this.id]["age"]
        //     }
        // }
        if (this.field === "age") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: userArr[this.id]["username"],
                email: userArr[this.id]["email"],
                age: this.value
            }
        }
        if (this.field === "email") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: userArr[this.id]["username"],
                email: this.value,
                age: userArr[this.id]["age"]
            }
        }
        if (this.field === "username") {
            userArr[this.id] = {
                id: userArr[this.id]["id"],
                username: this.value,
                email: userArr[this.id]["email"],
                age: userArr[this.id]["age"]
            }
        }
    }
}

const bobrossrtx = new User("Bobrossrtx", "bobrossrtx@gmail.com", 14);
bobrossrtx.addUser();
const googlaz = new User("Googlaz", "giz@mail.com", 22);
googlaz.addUser();

console.log("\n first");
console.log(userArr);

const bobrossrtxEdit = new UserEdit(0, "username", "BobrossrtxEdit");
bobrossrtxEdit.updateUser();
const googlazEdit = new UserEdit(1, "age", 23);
googlazEdit.updateUser();

console.log("\n Second");
console.log(userArr);