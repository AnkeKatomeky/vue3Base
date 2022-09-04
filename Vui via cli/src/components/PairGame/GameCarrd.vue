<template>
  <div v-if="!isShown" class="box" @click="selectBox">👓</div>
  <div v-if="isShown" class="box selected">
    {{ cardName }}
  </div>
</template>

<script>
export default {
  props: ["cardName", "cardIndex", "board"],
  emits: ["cardSelected"],
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    selectBox(e) {
      if (!this.board.isWaiting) {
        this.isShown = !this.isShown;
        this.$emit("cardSelected", this);
      }
    },
    hideBox() {
      this.isShown = false;
    },
  },
};
</script>

<style scoped>
.box {
  height: 60px;
  width: 60px;
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;

  align-items: center;
  display: flex;
  justify-content: center;
}

.selected {
  background-color: rgb(110, 11, 11);
}

.box.selected:hover{
  background-color: rgb(110, 11, 11);
}

.box:hover{
  background-color: darkcyan;
}
</style>