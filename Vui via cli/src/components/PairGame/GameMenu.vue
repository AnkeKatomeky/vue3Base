<template>
  <div class="buttons">
    <button @click="easyGame">Легкая</button>
    <button @click="normalGame">Средняя</button>
    <button @click="hardGame">Тяжелая</button>
  </div>
</template>

<script>
export default {
  emits: ["startGame"],
  methods: {
    easyGame() {
      this.$emit("startGame", 1);
    },
    normalGame() {
      this.$emit("startGame", 2);
    },
    hardGame() {
      this.$emit("startGame", 3);
    },
  },
};
</script>

<style>
.buttons{
  margin: 10px;
  padding: 10px;
}
</style>