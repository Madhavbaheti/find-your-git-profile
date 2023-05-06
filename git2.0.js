const APIURL = "https://api.github.com/users/";
const box = document.querySelector(".box") 
const search = document.querySelector("#search")
const main2 = document.querySelector(".main2")
const info = async(username) => {
    const response = await fetch(APIURL+username)
    const data = await response.json();
    console.log(data)
    if(data.name!=undefined) {
    const card = `<div class="box">
    <div class="pic">
       <img class="image" src=${data.avatar_url} alt="">
    </div>
    <div>
        <div class="content">
            <div class="name">
              ${data.name}
            </div>
            <div class="status">
               Followers: ${data.followers} <span class="following">Following: ${data.following}</span>
            </div>
        </div>
    </div>
    </div>`
   main2.innerHTML=card;
    }
    else {
        const not = `
        <h1>Not Found</h1>
        `
        main2.innerHTML=not;
    }
}

const formsubmit = () => {
   if(search.value !="") {
        info(search.value);
        console.log(search.value);
   }
   else {
    return false
   }
}
search.addEventListener("focusout",function() {
    formsubmit()
}

)