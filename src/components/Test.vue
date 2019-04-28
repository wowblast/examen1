<template>
  <div class="test">
    <input type="text" v-model="title"><br /> 
    <h1>{{title}}</h1>
  <p v-if="showName">{{user.firstName}}</p>
  <p v-else>nothing</p>
  <ul>
    <li v-for="item in items">{{item.title}}</li>
  </ul>
   <button v-on:click="greet('Hello World')">Say greetings</button>
   <br />
   <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit ">
   <hr />
   <label>First Name: </label><input type="text" v-model="user.firstName">
   <br />
   <label>Last Name: </label><input type= "text" v-model="user.lastName">
   <h3>{{fullname}}</h3>
  </div>

</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'About all',
      user: {
        firstName: 'JHON',
        lastName: 'Rivero'
      },
      showName: true,
      items: [
        {title: 'Item one'},
        {title: 'Item Two'},
        {title: 'Item Three'}
      ]
    }
  },
  methods: {
    greet: function( greetings) {
      alert(greetings );
    },
    pressKey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(){
      console.log('You hit enter');
    }
    
  },
  computed: {
    fullname: function(){
    return this.user.firstName+ ' ' + this.user.lastName;
  }
  }
  
}
</script>



<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
