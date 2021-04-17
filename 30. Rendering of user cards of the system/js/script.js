import {
  Admin
} from './admin.js';
import {
  Student
} from './student.js';
import {
  Lector
} from './lector.js'
import {
  User
} from './admin.js';


const ROLES = {
  student: data => new Student(data),
  admin: data => new Admin(data),
  lector: data => new Lector(data)
}


class Example {
  constructor(file) {
    this.getData(file);
  }

  async getData(file) {
    let response = await fetch(file),
      data = await response.json();

    this.setInfo(data)
  }

  setInfo(data) {
    for (let key in data) {
      this[key] = data[key];
    }
    this.createUsers();
  }

  createUsers() {
    let usersWithClass = this.users.map(user => ROLES[user.role] ? ROLES[user.role](user) : new User(user));
  }
}









let UserExample = new Example(`data.json`);