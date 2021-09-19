/*
1. Create an Author class and a Book class. Author should have: name, email, gender.
It should have getters. It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the
book based on the price and quantity. It should have a toString method.
*/

let Author = class {
    constructor(name, email, gander) {
        this.name_ = name;
        this.email_ = email;
        this.gander_ = gander;
    }

    get name() {
        return this.name_;
    }

    get email() {
        return this.email_;
    }

    get gender() {
        return this.gander_;
    }

    toString() {
        return this.name + ' ' + this.email + ' ' + this.gender;
    }    
}



let Book = class {
    constructor(title, author, price, quantity) {
        this.title_ = title;
        this.author_ = author;
        this.price_ = price;
        this.quantity_ = quantity;
    }

    get title() {
        return this.title_;
    }

    get author() {
        return this.author_;
    }

    get price() {
        return this.price_;
    }

    get quantity() {
        return this.quantity_;
    }

    set title(newTitle) {
        this.title_ = newTitle;
    }

    set author(newAuthor) {
        this.author_ = newAuthor;
    }

    set price(newPrice) {
        this.price_ = newPrice;
    }

    set quantity(newQuantity) {
        this.quantity_ = newQuantity;
    }

    getProfit() {
        let p = price();
        let q = quantity();
        return p * q;
    }

    toString = function() {
        return this.title + ', ' + this.author + ', ' + this.price + ', ' + this.quantity;
    }    
}


/// Test
let b0 = new Book('My Book', new Author('Hugo', 'hugo@kgmail.com', 'male'), 250, 35)
console.log(b0.toString());
 

/*
2. Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from
the balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should
subtract the amount from the account balance and add it to the given
anotherAccount and return the updated balance, if amount is less than the
balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond)
which gets two accounts and identifies if they are the same or not comparing
all fields.
It should have toString method.
*/


let Account = class {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get Id() {
        return this.id;
    }

    get Name() {
        return this.name;
    }

    get Balance() {
        return this.balance;
    }

    set Name(newName) {
        this.name = newName;
    }

    set Balance(newBalance) {
        this.balance = newBalance;
    }

    credit(amount) {
        this.Balance += amount;
        return this.Balance;
    }

    debit(amount) {
        if(amount < this.Balance) {
            this.Balance -= amount;
        }
        else {
            console.log("Amount exceeded balance.");
        }
    }

    transferTo(anotherAccount, amount) {
        if(amount < this.Balance) {          
            this.Balance -= amount;
            anotherAccount.Balance +=amount;
            return this.Balance;
        }
        else {
            console.log("Amount exceeded balance.");
            return -1;
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id == accountSecond.id && 
           accountFirst.name == accountSecond.name && 
           accountFirst.balance == accountSecond.balance;
    }

    toString() {
        return 'ID ' + this.id + ' NAME ' + this.name + ' BALNCE ' + this.balance;
    }    
}


/////Test
let a0 = new Account(1234, "Tom", 1234567);
let a1 = new Account(1234, "Tom", 1234567);
console.log(a0.Name);
console.log(Account.identifyAccounts(a0, a1));
console.log(a0.toString());
console.log(a0.credit(50))

/*
3. Write classes: Person, Student. Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters. It should have a method: toString().
Student is inherited from Person. It should have program(array of {programName, grade }), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(programName, grade). Student should contain the
data about its programs and exams. passExam will update that data, so if
student passed all the exams(grade is great or equal to 50), its year should be
increased by one. It should have a toString method.
*/

let Person = class {
    constructor(fn, ln, gn, ag) {
        this.firstName = fn;
        this.lastName = ln;
        this.gender = gn;
        this.age = ag;
    }

    get FirstName() {
        return this.firstName;
    }

    set FirstName(nm) {
        this.firstName = nm;
    }

    get LastName() {
        return this.lastName;
    }

    set LastName(ln) {
        this.lastName = ln;
    }

    get Gender() {
        return this.gender;
    }

    set Gender(gn) {
        this.gender = gn;
    }

    get Age() {
        return this.age;
    }

    set Age(ag) {
        this.age = ag;
    }

    toString() {
        return this.firstName + " " + this.lastName + ", G - " + this.gender + ", AGE - " + this.age;
    }
}

let Student = class extends Person {
    constructor(fn, ln, gn, ag, pg, yr, fe) {
        super(fn, ln, gn, ag);
        this.program = pg;
        this.year = yr;
        this.fee = fe;
    }

    get Program() {
        return this.program
    }

    set Program(pg) {
        this.program = pg
    }

    get Year() {
        return this.year;
    }

    set Year(yr) {
        this.year = yr;
    }

    get Fee() {
        return this.fee;
    }

    set Fee(fe) {
        this.fee = fe;
    }

    passExam(programName, grade) {
        this.program[programName] = grade;
        let passed = true;
        for(let q in this.program) {
            if(this.program[q] < 50) {
                passed = false;
                break;
            }
        }
        if(passed) {
            this.year += 1;
        }
    }

    toString() {
        return super.toString() + ", P - " + this.program + ", Y - " + this.year + ", FEE - " + this.fee;
    }
}

///Test
let s0 = new Student("Bill", "Gates", "male", 20, [{Math : 50}, {English : 60}, {History : 75}], 2, 100000);
console.log(s0.toString());



