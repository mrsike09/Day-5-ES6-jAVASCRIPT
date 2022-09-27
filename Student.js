class Student{
    constructor(studentname,studentemail){
        this.studentname = studentname;
        this.studentemail = studentemail
    }

    getStudentDetails(){
        return `${this.studentname} ${this.studentemail}`;
    }
}

//creating an object
//const student1 = new Student('Rama','ram@gmail.com');

//console.log(student1.getStudentDetails());

class PGStudent extends Student{
    constructor(studentname,studentemail){
        super(studentname,studentemail);
    }
    getSubject(){
        return 'PG Subjects'
    }
}

//const pgstudent1 = new PGStudent('Rama','ram@gmail.com');

//console.log(pgstudent1.getStudentDetails());

class UGStudent extends PGStudent{
    constructor(studentname,studentemail){
        super(studentname,studentemail);
    }

    getAttendance(){
        return 'UG Student Attendance'
    }
}


const ugstudent1 = new UGStudent();

ugstudent1.studentname = "Krishna";
ugstudent1.studentemail = "kris@gmail.com";

console.log(ugstudent1.getStudentDetails());