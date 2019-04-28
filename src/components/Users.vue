<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="ingrese nombre">
      <br>
      <input type="text" v-model="newUser.email" placeholder="ingrese email">
      <br>
      <input type="submit" value="Submit">
    </form>
    <h2>Numero de usuarios {{allUsers()}}</h2>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}:{{user.email}}
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'users',

  data () {
    return {
      newUser: {},
      users: [
        {
          name: 'JHON',
          email: 'jfr142012@gmail.com',
          contanted: false
        },
        {
          name: 'steve da',
          email: 'jfr1dsadsa42d012@gmail.com',
          contanted: false
        },
        {
          name: 'paul ruut',
          email: 'paul142012@gmail.com',
          contanted: false
        }
      ]
    }
  },
  methods: {
    addUser: function (e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contanted: false
      })
      e.preventDefault()
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    },
    allUsers: function(){
    return this.users.length
  }
  }
}
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
