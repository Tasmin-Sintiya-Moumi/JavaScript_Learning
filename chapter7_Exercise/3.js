//  Destructure name and semester out of your object in one line.

const myself ={
    name:"Moumi",
    dept:"CSE",
    semester:"4th year 1st semester",
    skills:["Machine Learning","Arts and crafts","Photography","Digital Illustration"]
};

const {name, semester}= myself;
console.log(name);
console.log(semester);