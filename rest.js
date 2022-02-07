// Use rest to enclose the rest of specific user-supplied values into an array:
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//  let rest = myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
//  console.log(rest);

let array = ["Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"]
 const [firstName,lastName, ...rest] = array;
 console.log(firstName,lastName,rest);