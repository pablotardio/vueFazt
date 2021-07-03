<template>
  <div class="usersClass">
    <h1>Usuario</h1>
    <ul>
      <li class="liUsers" v-for="user in users">
        {{user.name}} - {{user.email}}
        <button v-on:click="deleteUser(user)">X</button>
      </li>
    </ul>

    <form action v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name" />
      <input type="email" v-model="newUser.email" placeholder="Email" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Pablotv30",
          email: "Pablo@gmail.com",
          contacted: "false"
        },
        {
          name: "PedroCartory",
          email: "cartoryxx@gmail.com",
          contacted: "false"
        },
        {
          name: "Sergio",
          email: "SergioBrrr@gmail.com",
          contacted: "false"
        }
      ],
      newUser: {}
    };
  },
  methods: {
    addUser(e) {
      //e.preventDefault();
      this.users.push(this.newUser);
      this.newUser = {};
      console.log("Añadiendo Usuario", this.newUser);
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    
  },
  created() {
        console.log("Componente User Creado");
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(res=> console.log(res));
           this.$http.get('https://jsonplaceholder.typicode.com/users').then(res=> this.users=res.body);
    
    }
};
</script>
<style lang="">
.usersClass {
  background-color: rgb(78, 109, 194);
  color: white;
  padding: 20px;
}
.liUsers {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 5px;
}
</style>