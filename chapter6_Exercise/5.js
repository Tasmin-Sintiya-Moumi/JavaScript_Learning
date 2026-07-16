/*Combine filter + map: from an array of students with cgpa, produce an array of names of students 
with cgpa ≥ 3.5.*/

let student = [{name: "Tasmin", cgpa: 2.6}, {name: "Sintiya", cgpa: 3.6}, 
    {name: "Moumi", cgpa: 4.0}, {name: "Alice", cgpa: 3.2}];

let names = student.filter((s) => s.cgpa >= 3.5).map((s) => `${s.name}`);

console.log(names);