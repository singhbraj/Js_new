let a = [{id:1,name:"a",age:10},{id:2,name:"a",age:20},
{id:3,name:"a",age:18},{id:4,name:"a",age:19},
{id:2,name:"a",age:20}]


let b = [];
let c = [];

for(let i=0; i<a.length; i++){


if(b.indexOf(a[i].id)==-1){
  
  b.push(a[i].id);
  c.push(a[i])
  
}

}
console.log(c);