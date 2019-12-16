interface Person {
    firstName: string;
    lastName: string;
    print();
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

//let person/*: string | number*/ = 'Donald Trump';
//let person: string;
//person = '5';// 'Donald Trump';
//person = 5;

//let president: 'Trump' | 'Reagan';
//president = 'Clinton';

let person: Person = {
    firstName: 'Donald',
    lastName: 'Trump',
    //laastName: 'Trump'
    //print: function () {
    print() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

person.print();

document.body.innerHTML = greeter(person);

class Student implements Person {
    /*firstName: string;
    lastName: string;
    email: string;
    private socialSecurityNumber: string;*/

    constructor(public firstName: string, public lastName: string, public email: string, private socialSecurityNumber: string) {
        /*this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.socialSecurityNumber = socialSecurityNumber*/
    }

    print() {
        console.log(`${this.firstName} ${this.lastName} ${this.socialSecurityNumber}`);
    }

    getGrades(): number[] { //: string {
        return [95, 96, 87];
    }
}

const student = new Student('Nancy', 'Pelosi', 'npelosi@someplace.gov', '123-45-6789');
//student.firstName = 'Nancy';
//student.lastName = 'Pelosi';
//student.print = function () { };
//console.log(student.socialSecurityNumber);
student.print();

const grades: number[] = student.getGrades();

document.body.innerHTML = greeter(student);