
const $nome = document.querySelector("#nome")




const envForm = document.querySelector("#formu") 

envForm.onsubmit = function(e){
    e.preventDefault()

    const nome = document.forms['formu'].nome.value
    const idade = document.forms['formu'].idade.value
   
    
    fetch("http://localhost:8080/",{
        method: 'POST',
        headers:{
          'content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            nome,
            idade

        })
    }).then(response => {

        response.json().then(date=>{
            if(date.message === "success"){
                alert('cadastro realizado')
            }else{
                throw new Error("erro entre ao conectar");
                
            }

        })
    })
        

}
    
