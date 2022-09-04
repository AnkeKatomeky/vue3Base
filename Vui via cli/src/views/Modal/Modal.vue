<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{
        info: theme === 'info',
        warn: theme === 'warn',
        err: theme === 'err',
      }"
    >
      <h2>{{ title }}</h2>
      <p>{{ value }}</p>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "value", "elements", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border: 10px;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.container {
  padding: 50px;
  text-align: justify;
  align-items: center;
  background: rgb(4, 137, 204);
  margin: 20px;
  border-radius: 10px;
}

.info {
  background: wheat;
}

.warn {
  background: rgb(200, 100, 100);
}

.err {
  background: black;
  color: brown;
}
</style>