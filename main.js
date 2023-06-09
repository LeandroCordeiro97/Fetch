const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response =>response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/1`)
    .then(response =>response.json())
    .then(data => {
        userName.textContent = data.name 
        userCity.textContent = data.city
        userAvatar.src =data.avatar
       

    })
    .catch(error => console.error(error))
}

function addUser(newUser){
fetch(url,{
    method:"POST",
    body: JSON.stringify(newUser),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then (data =>alertAPI.textContent = data)
.catch()
}



const newUser ={
    name:"Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city:"Espanha"
}

function updateUser(updateUser){
fetch(`${url}/1`, {
    method: "PUT",
    body:JSON.stringify(updateUser),
    headers:{
        "Content-type" : "application/json;charset=UTF-8"
    }
})
.then(response => response.json())
.then(data => alertAPI.textContent = data)
.catch(error => console.error(error))
}

const updateUser ={
    name: "Leandro Cordeiro",
    avatar:"https://picsum.photos/200/300",
    city:"Portugal"
}
//addUser(newUser)
updateUser(updateUser)
getUser()
getUsers()
