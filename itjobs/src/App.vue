<template>
  <div id="app" class="default-app" v-bind:class="{ darkApp: checked }">
    <Header v-model="checked" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      checked: '',
    };
  },
   mounted() {
    if (localStorage.checked) {
      this.checked = localStorage.getItem('checked');
    } else {
      this.checked = false;
    }
  },
  
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background: #f2f2f2;
}

.darkApp body {
  background-color: black;
}
.btn {
  padding: 16px 35px;
  background-color: #5964e0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  border: none;
  cursor: pointer;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}

.btn:hover {
  background-color: #939bf4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1;
  color: #19202d;
  padding-bottom: 5%;
}

.default-app {
  background: #f2f2f2;
}

.darkApp {
  background-color: #121721;
}

.darkApp .filtration,
.darkApp .filtration input,
.darkApp .filtration input::placeholder,
.darkApp .company__item,
.darkApp .company__position,
.darkApp select,
.darkApp .card__intro-wrapper,
.darkApp .card,
.darkApp .card__footer,
.darkApp .check__wrapper,
.darkApp .mobile__menu {
  background-color: #19202d;
  color: white;
}

.darkApp .company__btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.darkApp .company__desc {
  color: #9daec2;
}
</style>
