<template>
  <div>
    <input type="text" v-model="user.firstName" v-on:keyup="tecleando" />
    <button type="button" v-on:click="saludar(user.firstName)">Saludos</button>
    <div> {{fullName}} Propiedadd computada</div>
    <div v-text="title"></div>

    <div v-html="myHtml">{{ myHtml }}</div>

    <div v-if="showName">
      <p>La bandera esta en true</p>
    </div>
    <div v-else>
      <p>la bandera esta en False</p>
    </div>

    <hr />
    <div>{{tasks[0].title}}</div>
    <ul>
      <li v-for="task in tasks">{{task.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Hola Vuejs es la variable title del json",
      user: {
        firstName: "Joe",
        lastname: "McMillan"
      },
      myHtml: "<h3>Hola html vue</h3>",
      showName: false,
      tasks: [{ title: "desayuno" }, { title: "Almuerzo" }, { title: "cena" }]
    };
  },
  methods: {
    saludar(usuario) {
      alert("Holas " + usuario);
    },
    tecleando(e) {
      console.log(e.target.value);
      if (e.code == "KeyS") {
        console.log("Presiono la S");
      }
    }
  },
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastname;
    }
  }
};
</script>
