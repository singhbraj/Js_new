// let obj = {
//     "data": [{
//       "id": 1,
//       "name": "Tarun",
//       "hobbies": ["reading", "playing cricket"]
//     },
//     {
//       "id": 2,
//       "name": "Ram",
//       "hobbies": ["reading", "swimming"]
//     },
//     {
//       "id": 3,
//       "name": "Shyam",
//       "hobbies": ["reading", "playing football"]
//     },
//     {
//       "id": 4,
//       "name": "Krishan",
//       "hobbies": ["writing code", "swimming"]
//     }
//     ]
//   }
  
  /* output
  
  {
    "reading": 3,
    "playing cricket": 1,
    "swimming": 2,
    "playing football": 1
  } */
  
  
  // const outputFunc = (arr) =>{
  
  
  // let obj = {};
  
  // let n  = arr.length;
  // for(let i=0;i<n; i++){
    
  //       arr[i].hobbies.forEach(element => {
  //         if(obj[element]){
  //           obj[element]++;
  //         }
  //         else{
  //           obj[element] = 1;
  //         }
  //       });
  
  // }


  // console.log(obj)
  // }
  
  
  
  // outputFunc(obj.data)
  // console.log(obj.data)


  // const user = {
  //   name:'Braj'
  // }

  // console.log('my name is' + user )



  // var variable  = 10;

  // (()=>{

  //  variable_3 = 35;
  //  console.log(variable_3);
  //  var variable_3 = 45;
  //  variable_2 = 15;
  //  console.log(variable);

  // })();

  // console.log(variable_2);
  // console.log(variable_3);
  // var variable = 30;


  var fullname =  "Braj Kishor";

  var obj ={
    fullname:"Robin Singh",
    prop:{
      fullname:"Ravi Mohan",
      getFullname:function(){
      // console.log(this)
        return this.fullname;
      }
    },
    getMyName:function(){
      console.log(this);
      return this.fullname;
    },
    getFirstName:()=>{
      console.log(this)
      return this.fullname.split(' ')[0];
    },
    getLastName:(function(){
      console.log(this)
      return this.fullname.split(' ')[1]
    })()
  }
  console.log(obj.prop.getFullname());
  console.log(obj.getFirstName());
  console.log(obj.getFirstName());
  console.log(obj.getLastName);