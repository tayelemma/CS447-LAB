let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){

    }

    edit(){

    }

    static getById(id){

    }

    static getAll(){

    }

    deleteById(id){

    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
Student.deleteById(4); //remove studentId=4 from db
Student.getAll(); //return db;
Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}