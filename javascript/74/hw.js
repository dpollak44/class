(function () {
    'use strict';

    class Student {
        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }
    }

    function printStudents(backwards, ...args) {
        args.forEach(student => {
            /*const { first, last, age, grade } = student;
            if (!backwards) {
                console.log(`${first}, ${last}, ${age}, ${grade}`);
            }
            else {
                console.log(`${last}, ${first}, ${age}, ${grade}`);
            }*/
            /*
            let { first, last, ...rest } = student;
            if (backwards) {
                [last, first] = [first, last];
            }
            console.log(`${first}, ${last}, ${rest.age}, ${rest.grade}`);
            */
            // first, last, rest;
            //({ first, last, ...rest } = student);
            const { first, last, ...rest } = student;
            let a = first, b = last;
            if (backwards) {
                [b, a] = [first, last];
            }
            console.log(`${a}, ${b}, ${rest.age}, ${rest.grade}`);
        });
    }

    const s1 = new Student('Donald', 'Trump', 70, 1);
    console.log(s1);

    const students = [s1, new Student('Jared', 'Kushner', 21, 2), new Student('Nancy', 'Pelosi', 85, -1)];
    printStudents(false, ...students);
    printStudents(true, ...students);

    function cloneStudent(original) {
        const { first, last, ...rest } = original;
        // return new Student(last, first, rest.age, rest.grade);
        return {
            first: last,
            last: first,
            ...rest
        };
    }

    const c1 = cloneStudent(s1);
    console.log(c1);
}());