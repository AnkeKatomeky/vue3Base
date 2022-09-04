<template>
  <h1>Пары</h1>
  <!-- <ModalInvoker type="info" />
  <ModalInvoker type="warn" />
  <ModalInvoker type="err" /> -->
  <PairGame />
</template>

<script>
import ModalInvoker from "./components/Modal/ModalInvoker.vue";
import PairGame from "./components/PairGame/PairGame.vue";

export default {
  components: {
    ModalInvoker,
    PairGame,
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body{
  background: black;
  color: white;
}
</style>
