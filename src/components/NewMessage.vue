<template>
  <div class="new-message">
    <form @submit.prevent='addMessage'>
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" name='new-message' v-model='newMessage'>
      <p class="red-text" v-if='feedback'>{{feedback}}</p>
    </form>
    <button class="btn teal" @click="changeAlias">Change alias</button>
    <button class="btn teal" @click="logout">Logout</button>
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name:'NewMessage',
  props:['name'],
  data(){
    return{
      newMessage: null,
      feedback: null
    }
  },
  methods:{
    addMessage(){
      if(this.newMessage){
        console.log(this.name, this.newMessage, Date.now())
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.newMessage = null
        this.feedback = null
      }else{
        this.feedback = 'You must enter a message in order to send one'
      }
    },
    changeAlias(){
      this.$router.push({name: 'Welcome'})
    },
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'Login'})
        console.log(`=========>> USER LOGGED OUT`)
      })
    }
  }
}
</script>