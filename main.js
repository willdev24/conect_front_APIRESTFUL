
const main={

 objzz:[],

init: function(){
this.conectarAPI()

//this.enviarDadosAPI()


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
    const self = this
    alert("qer")
    console.log(this.objzz)
  const corpo = document.querySelector('.lista')

 teste.map( itens => {

             const html = `   <article>
                    <p>*DADOS*</p>
                    <p>nome: ${itens.nome}</p>
                    <p>idade: ${itens.idade}</p>
                </article>`

corpo.innerHTML += html
 
})},

}

main.init()