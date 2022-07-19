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
        const student = db.find(user => user.id === this.id);
        if (student){
            throw new Error ('Student already exit');
        }
        db.push(this);
    }

    edit(){
       const index = db.findIndex(student => student.id === this.id);
       if( index < 0){
            throw new Error ('Student does not exit');
       }else{
        db[index] = this;
       }
    }

    static getById(id){
       return db.find(student => student.id ===id);
    }


    static getAll(){
        return db;
    }


    deleteById(id){
        const index = db.findIndex(student => student.id === id);
        return db.splice(index, 1);
    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
Student.deleteById(4); //remove studentId=4 from db
Student.getAll();  //return db;
Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}


console.log(Student.getAll());
Student.deleteById(2);
console.log(Student.getAll());
console.log(Student.getById(1));