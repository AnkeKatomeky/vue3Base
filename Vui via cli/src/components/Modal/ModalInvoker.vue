<template>
  <h2>Show {{ type }} modal</h2>
  <input type="text" ref="name" placeholder="Modal title" />
  <input type="text" ref="value" placeholder="Modal text" />
  <button @click="togleModal">Show modal window</button>

  <Modal
    v-show="showModal"
    :title="modalTitle"
    :value="modalMessage"
    :elements="books"
    :theme="type"
    @close="togleModal"
  >
    <template v-slot:actions>
      <a href="http://placeholder.pro">My site</a>
    </template>
    <template v-slot:header>
      <h2>(slot){{ modalTitle }}</h2>
      <p>{{ modalMessage }}</p>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  props: ["type"],
  data() {
    return {
      title: "My app",
      modalTitle: "New Message",
      modalMessage: "Message is hear",
      books: [
        { title: "kek", value: 1 },
        { title: "jep", value: 2 },
        { title: "zep", value: 3 },
        { title: "lep", value: 4 },
        { title: "hep", value: 5 },
      ],
      showModal: false,
    };
  },
  methods: {
    togleModal() {
      this.modalTitle = this.$refs.name.value;
      this.modalMessage = this.$refs.value.value;
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
.inputs {
  margin: 10px;
}

input,
button {
  margin: 8px;
}
</style>