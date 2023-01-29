

const user = {
    name: "John",
    surname: "Doe",
    age:{
      Age:23
    }
  }

//   const user1 = user;

  const user1 = {...user}
  user1.age.Age=24
  console.log(user)
  console.log(user1)

  // console.log(user === user1)