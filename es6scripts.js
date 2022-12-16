class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
    getIntro() {
        return this.firstName + " " + this.lastName;
    }
}

let employee1 = new Employee(1, "Ian","Auston","Graphic Artist", 42.50);
    console.log(`Employee ${employee1.firstName} created`);
    employee1.promote("Sr. Graphic Artist", 46.75);
    console.log(`Job title is ${employee1.jobTitle}`);
    console.log(`Pay rate is ${employee1.payRate}`);

