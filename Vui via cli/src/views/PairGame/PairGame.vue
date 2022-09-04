<template>
  <div class="pairs">
    <h2>Это игра в пары. Найди парные картинки</h2>
    <GameMenu @startGame="beginGame" />
    <GameBoard
      ref="board"
      @clickIsMade="clickIsMade"
      @addScore="addScore"
      @getTotal="getTotal"
    />
    <GameStatistic :clicks="clicks" :collected="collected" :total="total" />
    <Modal v-show="win" :theme="modalTheme">
      <template v-slot:header>
        <h2>Игра Закончина</h2>
        <p>
          Вы смогли собрать их всех за {{ clicks }} кликов и
          {{ seconds }} секунд
        </p>
        <p>{{ sadText }}</p>
        <button @click="beginGame(1)">Начать заново</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import GameMenu from "./GameMenu.vue";
import GameBoard from "./GameBoard.vue";
import GameStatistic from "./GameStatistic.vue";
import Modal from "../Modal/Modal.vue";

export default {
  components: {
    GameMenu,
    GameBoard,
    GameStatistic,
    Modal,
  },
  data() {
    return {
      clicks: 0,
      collected: 0,
      total: 0,
      win: false,
      beginDate: null,
      seconds: 0,
      modalTheme: "info",
      sadText: "Вы можете лучше",
    };
  },
  mounted() {
    this.beginGame(1);
  },
  methods: {
    beginGame(dificulty) {
      this.beginDate = new Date();
      this.win = false;
      this.total = 0;
      this.collected = 0;
      this.clicks = 0;
      if (this.$refs["board"] !== undefined)
        this.$refs["board"].getCards(dificulty);
    },
    getTotal(total) {
      this.total = total;
    },
    addScore() {
      this.collected++;
      if (this.collected === this.total) {
        this.seconds = Math.abs(
          (new Date().getTime() - this.beginDate.getTime()) / 1000
        );
        if (
          this.seconds > 60 + 10 + this.total ||
          this.clicks > 10 + this.total
        ) {
          this.modalTheme = "warn";
        } else {
          this.modalTheme = "info";
        }

        this.win = true;
      }
    },
    clickIsMade() {
      this.clicks++;
    },
  },
};
</script>