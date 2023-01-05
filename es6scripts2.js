class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee {
    constructor(firstName, lastName, id, jobTitle, payRate){
    super(firstName, lastName)

    this.id = id;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
}
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

employee1 = new Employee("Joe", "Shiesty", "1", "Quarterback", 32.75);
employee2 = new Employee("MartinLuther", "Irving", "2", "Basketball Player", 43.20);

console.log(employee1.getFullName);
console.log(employee2.getFullName);