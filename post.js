
const $nome = document.querySelector("#nome")




const envForm = document.querySelector("#formu") 

envForm.onsubmit = function(e){
    e.preventDefault()

    const nome = document.forms['formu'].nome.value
    const idade = document.forms['formu'].idade.value
   
    
    fetch("http://localhost:8080/",{
        method: 'POST',
        headers:{
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            idade

        })
    }).then( Response=>{
        Response.json(date=>{
if(date.message == "success"){

    envForm.reset()

    alert('cadastro realizado com sucesso')
}else{
alert("erro!!!!!")
}

        })
    })

    
}