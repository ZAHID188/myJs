const informationDB=[
    {name:"zahid",age:26},
    {name:"xinman",age:23}
]

function getInfo(){
    setTimeout(() =>{
        let output=''
        // informationDB.forEach((each,index) => {
        //     output+=`<li>${index}user${each.name} and ${each.age}</li>`
        // });


        // for([index,each] of informationDB.entries()){
        //     output+=`<li>user${each.name} and ${each.age}</li>`

        // }

        for(let i=0;i <informationDB.length;i++){
            each=informationDB[i]
            output+=`<li>user${each.name} and ${each.age}</li>`
        }
        document.body.innerHTML=output

    },2000)

}

function createInfo(inf){
    return new Promise((xxxx, yyy)=>{
        setTimeout(() => {
            informationDB.push(inf);  
            const error=false;
            if(!error){
                xxxx();
            }
            else {
                yyy('something is wrong');
            }
        }, 400);
    });


}


// createInfo( {name:"abuzar",age:29}).then(getInfo).catch(err=>{
//     console.log(err)
// })

// async /await 
async function init() {
    // Fetch the JSON data and await the result
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsondata = await response.json(); // Parse the JSON

    // Loop through the jsondata array
    for (let i = 0; i < jsondata.length; i++) {
        const each = jsondata[i]; // Access each user object
        console.log(each)
        await createInfo({ name: each.name, age: 29,   }); // Pass the user object
    }

    getInfo(); // Call getInfo after processing all users
}

init();
// promise all

// const promise1=Promise.resolve("hello");
// const pro2=10;
// const pro3=new Promise((resolve,reject)=>setTimeout(resolve,4000,'good bye'))
// const pro4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
// Promise.all([promise1,pro2,pro3,pro4]).then(values=> console.log(values))