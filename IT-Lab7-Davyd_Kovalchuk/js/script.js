class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    sleep() {
        console.log('Zzzzzz');
    }

    describe() {
        console.log(`Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}`);
    }
}


class Student extends Human {
    constructor(name, gender, age, course, group) {
        super(name, gender, age);
        this.course = course;
        this.group = group;
    }

    goToUniversity() {
        console.log('I am going to university');
    }
}


class Teacher extends Human {
    constructor(name, gender, age, title, experience, subject) {
        super(name, gender, age);
        this.title = title;
        this.experience = experience;
        this.subject = subject;
    }

    describe() {
        console.log(`Name: ${this.name}, Title: ${this.title}, Experience: ${this.experience} years, Subject: ${this.subject}`);
    }
}

Student.prototype.sleep = function() {
    console.log('Zzzzzzsasdasdasdaw');
}


const student1 = new Student('Alice', 'Female', 20, '1st Year', 'Group A');
const teacher1 = new Teacher('Mr. Smith', 'Male', 35, 'Professor', 10, 'Mathematics');

student1.describe(); // Виведе ім'я, стать, вік, курс і групу студента
student1.sleep();    // Виведе 'Zzzzzz'
student1.goToUniversity(); // Виведе 'I am going to university'

// teacher1.describe(); // Виведе ім'я, звання, стаж роботи і предмет, який викладає викладач
// teacher1.sleep();    // Виведе 'Zzzzzz'