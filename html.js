console.log("hello world")

const first=1;
const second=2;
console.log(first);
const str="hema";
console.log(str)
const fruits=["Apple","Banana","Grapes"]
console.log(fruits[0])
fruits[1]="Watermelon"
console.log(fruits[1])
const arr=[1,"name",false,2.4]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="Hi guys"

function newFunction(){
    console.log("I am  writing something")
}
const input=document.getElementById("eventListener")
const output=document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})

 const newvar=document.createElement("p");
 newvar.textContent="New paragraph"
 document.body.appendChild(newvar);