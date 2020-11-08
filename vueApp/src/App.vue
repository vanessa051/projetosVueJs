<template>
  <div id="app">
    <div class="container">
      <div class="col-md-12">
        <div class="text-center page-header">
           <h1>Catálogo de filmes</h1>
        </div>
      </div>

      <div class="input-group">
        <input class="form-control" type="text" v-model="nomeDoFilme" placeholder="Nome do Filme">
        <div class="input-group-btn">
          <button class="btn btn-xs btn-success" @click="adicionarFilme()">Adicionar</button>
        </div>
      </div>

     <br>
     
      <ul class="list-group">
      <li class="list-group-item" v-for="(nomeDoFilmes, key) in nomesDosFilmes" :key="key">
        <label>Nome: {{nomeDoFilmes.nomeDoFilme}}</label> 

        <span class="input-group">
         
          <input class="form-control" type="text" v-model="editForm[key]" placeholder="Digite um novo nome">
      <button class="btn btn-xs btn-info" @click="editFilme(key)">Editar</button>
      <button class="btn btn-xs btn-danger" @click="removeFilme(key)">Remover</button>
        </span>
      
      </li>
      
    </ul>
      

    </div>
  </div>
</template>

<script>
import { db } from './database/firebase'

export default {
data(){
  return {
    nomeDoFilme: 'Vingadores',
    nomesDosFilmes: [],
    editForm: []
  }
},

mounted(){
    db.ref('filmes/').on('value', (snapshot) =>{
      this.nomesDosFilmes = snapshot.val()
    })
  },

methods: {
  adicionarFilme(){
    db.ref('filmes/').push( { nomeDoFilme: this.nomeDoFilme } )
      .then( (date) =>{ console.log(data)})
      .catch( (error) => {console.log(error)})
    },
    editFilme(key){
      db.ref('filmes/' + key).set({
        nomeDoFilme: this.editForm[key]
      })
    },
    removeFilme(key){
      db.ref('filmes/' + key).remove()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
