<template>
  <div class="hello">
    <h1>{{ newtitle }}</h1>
    <h1>msg</h1>
    <button @click="getFive">HOLA</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      title: 'Vue.js class',
      newTitle: ''
    }
  },
  mounted () {
    this.newTitle = this.msg !== null && this.msg !== undefined ? this.msg : this.title
  },

  updated () {},

  props: {
    msg: String,
    msg2: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getFive () {
      return 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
