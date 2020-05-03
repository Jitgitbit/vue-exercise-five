<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter any name or alias you want, within this chat you have the option of remaining anonymous:</label>
          <input type="text" name='name' v-model='name'>
          <p class="red-text" v-if="feedback">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
          <button class="btn teal" @click="logout">Logout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null,
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        console.log(this.name)
        this.$router.push({name:'Chat', params: {name: this.name} })
      }else{
        this.feedback = 'You must enter a name to join chat'
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome{
  max-width: 400px;
  /* margin-top: 100px; */
}
.xelcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
</style>
