function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
//let person/*: string | number*/ = 'Donald Trump';
//let person: string;
//person = '5';// 'Donald Trump';
//person = 5;
//let president: 'Trump' | 'Reagan';
//president = 'Clinton';
var person = {
    firstName: 'Donald',
    lastName: 'Trump',
    //laastName: 'Trump'
    //print: function () {
    print: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};
person.print();
document.body.innerHTML = greeter(person);
var Student = /** @class */ (function () {
    /*firstName: string;
    lastName: string;
    email: string;
    private socialSecurityNumber: string;*/
    function Student(firstName, lastName, email, socialSecurityNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.socialSecurityNumber = socialSecurityNumber;
        /*this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.socialSecurityNumber = socialSecurityNumber*/
    }
    Student.prototype.print = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.socialSecurityNumber);
    };
    return Student;
}());
var student = new Student('Nancy', 'Pelosi', 'npelosi@someplace.gov', '123-45-6789');
//student.firstName = 'Nancy';
//student.lastName = 'Pelosi';
//student.print = function () { };
//console.log(student.socialSecurityNumber);
student.print();
document.body.innerHTML = greeter(student);
