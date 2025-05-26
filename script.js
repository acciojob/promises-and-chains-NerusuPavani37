//your JS code here. If required.
function promiseFn(name,age){
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        if(age < 18){
           reject(`Oh sorry ${name}. You aren't old enough.`)
        }else{
           resolve(`Welcome, ${name}. You can vote.`)
        }
      },4000)
    });  
}

function handleSumbit(){
  let form = document.querySelector('form');
  let name = document.getElementById("name").value;
  let age =parseInt(document.getElementById("age").value);
  if(!name || isNaN(age)){
    alert("Please enter valid details");
  }else{
    promiseFn(name,age)
    .then((mess) =>{
      alert(mess);
      form.reset();
    })
    .catch((err)=>{
      alert(err);
      form.reset();
    })
  }
}

document.getElementById('btn').addEventListener('click' , handleSumbit);