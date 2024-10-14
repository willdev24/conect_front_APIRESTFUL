

let contador = 1
const main={

init: function(){

  this.conectarAPI()

},


conectarAPI: function(){
const API = "http://localhost:8080/"

fetch(API).then(Response=>{
    Response.json()
    .then(date=>{

   const teste = date.map( intens =>{
        const newar = {
              id:intens._id,
              nome:intens.nome,
              idade:intens.idade,
        }
       
        return newar
     })
   this.listarCadastros(teste)

    })
   
})
},


listarCadastros: function(teste){
  
  const corpo = document.querySelector('.lista')

 teste.map( itens => {
  
             const html = `   <article class="inn">
             <div>
                    <p>*DADOS ${contador}</p>
                    <p>nome: ${itens.nome}</p>
                    <p>idade: ${itens.idade}</p>
             </div>   
                   
             <div class="variaveis">
                    <ul class="variaveis">
                        <li  class="editar  ><a href="#" data-local="${itens.id}" data-nome="${itens.nome}" data-idade="${itens.idade}">EDITAR</a></li>
                        <li class="excluir" ><a href="#" data-local="${itens.id}" data-nome="${itens.nome}" data-idade="${itens.idade}">EXCLUIR</a></li>
                    </ul>
             </div>  
                </article>
<hr>          
                `
                contador++
corpo.innerHTML += html
 
});

const self = this

const apagar= document.querySelectorAll('.excluir')
apagar.forEach(itens=>{
  itens.addEventListener('click', this.Eventos.apagar.bind(this))
});

const editar = document.querySelectorAll('.editar')
editar.forEach(itens=>{
  itens.addEventListener('click', this.Eventos.editando.bind(self))
})


},


Eventos:{
  
 apagar:function(e){
  const id = e.target.dataset.local

fetch(`http://localhost:8080/${id}`, {
  method:"DELETE",}).then(response => {
    response.json().then( date=>{
       
      if(date){
        main.conectarAPI()
      }
    })
  })
  
 },
 
 editando:function(e){
   
    const id = e.target.dataset.local
    const nome = e.target.dataset.nome
    const idade = e.target.dataset.idade

visivel()

function visivel(){
const formEDITAR = document.querySelector('.edissao')

const done = formEDITAR.classList.contains('open')

if(done == false){
  formEDITAR.classList.add('open')
}else{
  formEDITAR.classList.remove('open')
}
}



const FORSM = document.querySelector('#formEDITAR')

  document.querySelector("#nome").value = nome
  document.querySelector("#idade").value = idade
 
FORSM.onsubmit = function(e){

e.preventDefault()

const nome = document.forms['formEDITAR'].nome.value
const idade = document.forms['formEDITAR'].idade.value


  fetch(`http://localhost:8080/${id}`, {
    method:"PUT",
    headers:{
      'content-Type': 'application/json; charset=utf-8'
    },

    body: JSON.stringify({
    nome,
    idade,
    
    }) 

  }).then(response => {
      response.json().then( date=>{
  
        if(date){
          const corpo = document.querySelector('.lista')
          corpo.innerHTML = ""
          main.conectarAPI()
          visivel()
        }
        
      })
    })
    
   
}

}
}

}

main.init()