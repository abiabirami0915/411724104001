console.log("A")
setTimeout(()=>{
    console.log("D")
},2000)
setTimeout(()=>{
    console.log("B")
}, 0)
console.log("C")

const promise=new Promise((resolve,reject)=>{
    setTimeout(example,4500)
    setTimeout(example1,0)
})



const promise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        console.log("Done")
    }
    else{
        console.log("Fail")
    }
})

promise.then(res=>{console.log(res)})
.catch(err=>console.log(err))

function example(){
    console.log("Hi")
}

const example1 =()=>{
    console.log("Hello")
}