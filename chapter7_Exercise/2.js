// Add a method describe() to that object that returns a summary string using this. 

const myself ={
    name:"Moumi",
    dept:"CSE",
    semester:"4th year 1st semester",
    skills:["Machine Learning","Arts and crafts","Photography","Digital Illustration"],
    describe(){
       return `My name is ${this.name}, a student of the ${this.dept} department, currently in ${this.semester}, and my skills are: ${this.skills.join(", ")}`
    }
};

console.log(myself.describe());