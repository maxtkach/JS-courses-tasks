class User {
  constructor(data) {
    this.createUser(data);
    this.renderUser();

  }

  createUser(data) {
    for (let key in data) {
      this[key] = data[key];
    }
  }

  checkGradation() {
    let gradation = [
      [0, 20],
      [20, 55],
      [55, 85],
      [85, 100]
    ];
    // console.log(this.courses[0].score)
    this.courses.map(course => {
      if (course.mark >= gradation[0][0] && course.mark <= gradation[0][1]) {
        return `<span>Satisfying</span>`;
      }
      if (course.mark >= gradation[1][0] && course.mark <= gradation[1][1]) {
        return `<span>Good</span>`;
      }
      if (course.mark >= gradation[2][0] && course.mark <= gradation[2][1]) {
        return `<span>Very-good</span>`;
      }
      if (course.mark >= gradation[3][0] && course.mark <= gradation[3][1]) {
        return `<span>Excellent</span>`;
      }
    })

  }



  checkRole(role) {
    var roles = {
      "admin": "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
      "student": "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
      "lector": "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
    }

    if (role == 'student') {
      return `<img src="${roles.student}" alt="student" height="25">
              <p>Student</p> `
    }
    if (role == 'admin') {
      return `<img src="${roles.admin}" alt="student" height="25">
              <p>Admin</p> `
    }
    if (role == 'lector') {
      return `<img src="${roles.lector}" alt="student" height="25">
                <p>Lector</p>  `

    }
  }

  renderUser() {
    document.write(`
        <div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="${this.img}" alt="Jack Smith" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    ${this.checkRole(this.role)}
                </div>
            </div>
        </div>
        `)
    this.renderCourses();
    console.log(this.role)



  }
}

export class Student extends User {
  constructor(data) {
    super(data);
  }

  renderCourses() {
    document.write(this.courses.map(course => `<p class="user__courses--course student">Title: ${course.title} <span>${course.mark}</span></p>`).join(' '));
  }
}