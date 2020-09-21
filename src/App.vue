<template>
  <div id="app">
    <h3>
      VueJs-Form built with
      <br />firebase and vue-resource
    </h3>
    <div>
      <b-form class="input-center mt-3 texe-center">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" required placeholder="Enter name" v-model="userInfo.username"></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            type="email"
            required
            placeholder="Enter email"
            v-model="userInfo.email"
          ></b-form-input>
        </b-form-group>
        <b-button class="mr-4" type="submit" variant="primary" @click.prevent="submitForm">Submit</b-button>
        <b-button type="reset" variant="secondary" @click="getData">Get Data</b-button>
        <b-list-group class="mt-4">
          <b-list-group-item
            v-for="someone in users"
            :key="someone.name"
            href="#"
          >{{someone.username}} - {{someone.email}}</b-list-group-item>
        </b-list-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userInfo: {
        username: "",
        email: "",
      },
      users: [],
      resource: {},
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post("", this.userInfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
      (this.userInfo.username = ""), (this.userInfo.email = "");
    },
    getData() {
      this.$http
        .get("")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const dataArray = [];
          for (let key in data) {
            dataArray.push(data[key]);
          }
          this.users = dataArray;
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-center {
  margin: 0 auto;
  max-width: 350px;
  text-align: center;
}
</style>
