// var expenses={
//     "jan":20000,
//     "feb":18000,
//     "march" :2500
// }

// // print exp of jan
// console.log(expenses["jan"]);
// console.log(expenses.jan);


// var student={
//     name:"ram",
//     age:25,
//     course:"mearnstack"
// }

// // print student name
// console.log(student.name);
// // update course as django
// student.course="django"
// console.log(student);

// create an object employee with eld,1000,emp_name nikhil,desig developer,salary 2000

var  employee={

    eid:1000,
    emp_name:"nikhil",
    desig:"developer",
    salary:20000,
    exp:2

}

// print employee name
console.log(employee.emp_name);
// print employee designtaion
 console.log(employee.desig);

 // print update employee salary as 30000
employee.salary=30000
 console.log(employee);

 // add new key value pair email niki@gmail.com

employee.email="niki@gmail.com"

 console.log(employee);


 // check exp key is  exist  if yes add value as current exp+1 if no add value as 1

 if("exp" in employee){

    employee.exp+=1;
 }
 else{
     employee.exp=1
 }
 console.log(employee);
 




