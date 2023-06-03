// https:randomuser.me

const url="https:randomuser.me"
let title = document.querySelector("#title")
let fullName = document.querySelector("#fullname")
let email = document.querySelector("#email")
let phoneNumber = document.querySelector("#phoneNumber")
let address = document.querySelector("#address")
let img = document.querySelector("#img")
let btn = document.querySelector("#next")

const getUserData = () =>{
    fetch("https://randomuser.me/api").then((response)=>{
        return response.json().then((data)=>{
            console.log(data.results[0])
            title.textContent =data.results[0].name.title
            fullName.textContent = data.results[0].name.first + " " + data.results[0].name.last
            email.textContent =  data.results[0].email
            phoneNumber.textContent =  data.results[0].phone
            address.textContent =  data.results[0].location.city +  " " + data.results[0].location.country
            img.src=data.results[0].picture.medium
        })
    })
}
getUserData()

btn.onclick=()=>{
    getUserData()
}

// data.results[0].location.street.number + " " + data.results[0].location.street.name + " " +