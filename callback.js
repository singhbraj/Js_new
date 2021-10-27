
console.log("Start");

function loginUser(email, password,callback){
    setTimeout(()=>{
       console.log("Now we have the data")
       callback( {userEmail:email, password:password})
    },3000)
}


function getUserVideos(email,callback)
{
    setTimeout(()=>{    

        callback(["video1","video2","video3"])

    },2000)
}

function videoDetail(video,callback){
    setTimeout(()=>{
        callback('title of the video')
    },2000)
}

const user  = loginUser("braj333singh@gmail.com","123456",(result)=>{
    console.log(result);
    getUserVideos(result.userEmail,(videos)=>{
    console.log(videos)
    videoDetail(videos[0],title=>console.log(title))
    })

});


console.log("finish")