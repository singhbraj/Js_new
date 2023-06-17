function fruits(){
    this.name = "fruit 1"
}

function apple(){
    // console.log(this)
    fruits.call(this)
}

apple.prototype = Object.create(fruits.prototype)
const app = new apple()
console.log(app.name)

