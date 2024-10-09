let contador = 1
const main={

init: function(){

  this.conectarAPI()

},


conectarAPI(){
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


listarCadastros(teste){
  
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
                        <li><a class="editar" href="#">EDITAR</a></li>
                        <li class="excluir"  ><a href="#">EXCLUIR</a></li>
                    </ul>
             </div>  
                </article>
<hr>          
                `
                contador++
corpo.innerHTML += html
 
})

const apagardo= document.querySelectorAll('.excluir')
apagardo.forEach(itens=>{
  itens.addEventListener('click', this.Eventos.rodar)
})

},


Eventos:{
  
 rodar:function(){
  console.log("okoko")
  alert("deuu certo")
 } 
}


}

main.init()