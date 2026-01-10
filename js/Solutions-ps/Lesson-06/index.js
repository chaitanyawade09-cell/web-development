// Q.1
function fetchUserData_1() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("User Data Retrived")
        }, 1500)
    })   
}
fetchUserData_1().then((message)=>{
    console.log(message);
})


// Q.2
function fetchUserData_2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("user data retrived")
        }, 3000)
    })
}

async function displayData() {
    try{
        const data = await fetchUserData_2()
        console.log("Async operation completed, \n", data)
    }catch(error){
        console.error("Failed to fetch data: ", error)
    }
}

displayData()
