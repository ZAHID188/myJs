const myPromise = new Promise((res, rej) => {
    console.log("pending")
    setTimeout(() => {
        problem = false;
        if (!problem) {
            res("no problem")
        }
        else {
            rej("have problem")
        }

    }, 5000)

})

myPromise.then(res => console.log(res)).catch(err => console.log(err))