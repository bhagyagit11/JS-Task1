class Student{
    constructor(SName,SId,sub1,sub2,sub3,totalMarks){
        this.SName = SName
        this.SId = SId
        this.sub1 = sub1
        this.sub2 = sub2
        this.sub3 = sub3
        this.totalMarks = totalMarks
    }
    getFullMarks(){
        this.totalMarks = this.sub1 + this.sub2 + this.sub3
        console.log("Full Marks of Student1:",this.totalMarks)
    }
    getAllSubMarks(){
        console.log("All subjects Marks",this.sub1,this.sub2,this.sub3)
    }
}
    
class Student2 extends Student{
    constructor(SName,SId,sub1,sub2,sub3,totalMarks){
        super(SName,SId,sub1,sub2,sub3,totalMarks)
        
    }
    getFullMarks(){
        this.totalMarks = this.sub1 + this.sub2 + this.sub3
        console.log( "Full Marks of Student2:",this.totalMarks)
    }
    getAllSubMarks(){
        console.log("All subjects Marks",this.sub1,this.sub2,this.sub3)
    }
} 
let stu1 = new Student('Jhon',102,55,40,60)
 console.log("Student1 Name:",stu1.SName) 
 console.log("Studen1 ID:",stu1.SId)
 stu1.getAllSubMarks()
 stu1.getFullMarks()
 
let stu2 = new Student2('Ram',103, 70, 80, 90)
console.log("Student2 Name:",stu2.SName)
console.log("Studen2 ID:",stu2.SId)
stu2.getAllSubMarks()
stu2.getFullMarks()


