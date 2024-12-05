const myPromise=new Promise((res,rej)=>{
    problem=true;
    if(!problem){
        res("no problem")
    }
    else{
        rej("have problem")
    }
})

myPromise.then(res=>console.log(res)).catch(err=>console.log(err))