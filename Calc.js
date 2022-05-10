// class Calc {
//     constructor(num = 0) {
//         this.num = num;
//     }
  
//     add(a) {
//         return new Calc(this.num+a);
//     }
  
//     sub(a) {
//         return new Calc(this.num-a);
//     }
    
//     mul(a){
//   return new Calc(this.num*a)
  
//   }
  
//     print() {
//         return this.num;
//     }
//   }
//   const calc = new Calc()
  
  
//   console.log(calc.add(20).sub(30).add(20).mul(50).print() )


var Calc = {

    x:0,
    add:function(a){
       this.x+=a
       return Calc
    },
    sub:function(b){
       this.x-=b
        return Calc
    },
    mul:function(c){
        this.x*=c
        return Calc
    },
    print:function(){
        return this.x
    }
}
  console.log(Calc.add(20).sub(30).add(20).mul(50).print() )
