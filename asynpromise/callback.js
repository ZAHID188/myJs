const informationDB = [
    { name: "zahid", age: 26 },
    { name: "xinman", age: 23 }
]

function getInfo() {
    setTimeout(() => {
        let output = ''
        // informationDB.forEach((each,index) => {
        //     output+=`<li>${index}user${each.name} and ${each.age}</li>`
        // });


        // for([index,each] of informationDB.entries()){
        //     output+=`<li>user${each.name} and ${each.age}</li>`

        // }

        for (let i = 0; i < informationDB.length; i++) {
            each = informationDB[i]
            output += `<li>user${each.name} and ${each.age}</li>`
        }
        document.body.innerHTML = output

    }, 4000)

}

function createInfo(inf, callbackfunc) {
    setTimeout(() => {
        informationDB.push(inf);
        callbackfunc();
    }, 6000);
}


createInfo({ name: "abuzar", age: 29 }, getInfo)