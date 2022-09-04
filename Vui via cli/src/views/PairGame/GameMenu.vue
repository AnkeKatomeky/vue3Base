<template>
  <div class="buttons">
    <button
      class="dificultyButton"
      :class="{ selected: curentDificulty === 1 }"
      @click="easyGame"
    >
      Легкая
    </button>
    <button
      class="dificultyButton"
      :class="{ selected: curentDificulty === 2 }"
      @click="normalGame"
    >
      Средняя
    </button>
    <button
      class="dificultyButton"
      :class="{ selected: curentDificulty === 3 }"
      @click="hardGame"
      @dblclick="uberGame"
    >
      Тяжелая
    </button>
    <button
      v-show="curentDificulty === 4"
      class="dificultyButton"
      :class="{ selected: curentDificulty === 4 }"
      @click="uberGame"
    >
      ÜBER
    </button>
  </div>
</template>

<script>
export default {
  emits: ["startGame"],
  data() {
    return {
      curentDificulty: 1,
    };
  },
  methods: {
    easyGame() {
      this.curentDificulty = 1;
      this.$emit("startGame", 1);
    },
    normalGame() {
      this.curentDificulty = 2;
      this.$emit("startGame", 2);
    },
    hardGame() {
      this.curentDificulty = 3;
      this.$emit("startGame", 3);
    },
    uberGame() {
      this.curentDificulty = 4;
      this.$emit("startGame", 4);
    },
  },
};
</script>

<style scoped>
.buttons {
  margin: 10px;
  padding: 10px;
  text-align: center;
}

.dificultyButton {
  border: 0;
  background: #444;
  color: #fff;
  padding: 10px 20px;
  margin: 8px;
  border-radius: 10px;
  cursor: pointer;
}

.dificultyButton.selected {
  background: rgb(110, 11, 11);
}

.dificultyButton:hover {
  background: darkcyan;
}
</style>