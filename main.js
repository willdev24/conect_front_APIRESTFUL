
const main={

 objzz:[],

init: function(){
this.conectarAPI()
this.listarCadastros()
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

     this.objzz.push(...teste)

    })
   
})
},


listarCadastros(){
    const self = this
    alert("qer")
    //console.log(this.objzz)
  const corpo = document.querySelector('.lista')

  this.objzz.map( itens => {

   console.log(itens)

           /*  const html = `   <article>
                    <p>*DADOS*</p>
                    <p>nome: ${intens.nome}</p>
                    <p>idade: ${intens.idade}</p>
                </article>`

corpo.innerHTML = html
*/
    })


 
}



}

main.init()