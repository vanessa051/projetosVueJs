<template>
  <div id="app">
    <!--* Div inserir nota 
    * Div para visualizar notas 
      *Cada div com botão pra excluir e editar -->
      <div class="container">
      <div class="header">
        <h1>VueNotes</h1>
        <h3>Crie suas notas</h3>
      </div>
        <div class="form-todo form-group">
          <p>
            <input class="form-control" placeholder="Título da nota" type="text" v-model="noteTitle">
          </p>

          <p>
            <textarea class="form-control" placeholder="Insira sua nota" v-model="noteContent"></textarea>
          </p>

          <button class="btn btn-note" type="submit" @click="addNote()">Salvar</button>
        </div>

        <div class="card-deck">
          <div class="card-body card-note" v-for="(arrayNotes, key) in notes" :key="key">
            <span class="card-title">Título: <strong> {{arrayNotes.noteTitle}}</strong></span>
            <p class="card-text">{{arrayNotes.noteContent}}</p>
            <button class="btn btn-xs btn-danger" @click="removeNote(key)">Excluir</button>       
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import { db } from './database/firebase'

export default {
  data(){
    return{
      noteTitle: '',
      noteContent: '',
      notes: []
    }
  },
  mounted(){
    db.ref('notesTable/').on('value', (snapshot) =>{
      this.notes = snapshot.val()
    })
  },
  methods: {
    addNote(){
      db.ref('notesTable/').push({noteTitle: this.noteTitle, noteContent: this.noteContent})
      .then((date) => {console.log(data)})
      .catch((error) => {console.log(error)})
    },
    removeNote(key){
      db.ref('notesTable/' + key).remove()
    }
  }

  
}
</script>

<style>
#app {
  font-family: 'Grandstander', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ef32d9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #89fffd, #ef32d9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #89fffd, #ef32d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin:auto;
}

.header{
  text-align: center;
  padding-top: 30px;
  padding-bottom: 15px;
}

.card-note{
  background: rgba(240, 167, 195, 0.5);
  margin: 5px;
  border-radius: 10px;
}

.btn-note{
background: #ee9ca7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
