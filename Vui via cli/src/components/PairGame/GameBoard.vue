<template>
  <div class="container">
    <div class="wrapper">
      <GameCard
        ref="cards"
        v-for="(item, index) in gameCards"
        :key="index"
        :cardName="item"
        :cardIndex="index"
        :board="this"
        @cardSelected="selectCard"
      />
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCarrd.vue";

export default {
  components: {
    GameCard,
  },
  emits: ["clickIsMade", "addScore", "getTotal"],
  data() {
    return {
      selectedCard: null,
      isWaiting: false,
      gameCards: [],
    };
  },
  methods: {
    async selectCard(item) {
      this.$emit("clickIsMade");
      if (this.selectedCard === null) {
        this.selectedCard = item;
      } else if (this.selectedCard.cardName === item.cardName) {
        this.$emit("addScore");
        this.selectedCard = null;
      } else {
        this.isWaiting = true;
        await sleep(1000);
        this.isWaiting = false;

        this.selectedCard.hideBox();
        item.hideBox();

        this.selectedCard = null;
      }
    },

    getCards(dificulty) {
      if (this.$refs["cards"] !== undefined)
        this.$refs["cards"].forEach((q) => {
          q.hideBox();
        });
      let cardsCount = 0;
      switch (dificulty) {
        case 1:
          cardsCount = 6;
          break;
        case 2:
          cardsCount = 8;
          break;
        case 3:
          cardsCount = 10;
          break;
        default:
          cardsCount = 12;
          break;
      }
      this.$emit("getTotal", cardsCount);

      let selectedCards = [];
      while (selectedCards.length < cardsCount * 2) {
        let selection = names[randomIntFromInterval(0, names.length - 1)];
        if (!selectedCards.includes(selection)) {
          selectedCards.push(selection);
          selectedCards.push(selection);
        }
      }
      shuffle(selectedCards);
      this.gameCards = selectedCards;
    },
  },
};

let names = [
  "🍎",
  "🍐",
  "🛴",
  "🚙",
  "🌄",
  "🌅",
  "🏡",
  "🏭",
  "💾",
  "😀",
  "🐱",
  "🐶",
  "🌳",
  "🌼",
  "📏",
  "📃",
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
</script>

<style scoped>
.wrapper {
  display: inline-grid;
  grid-template-columns: repeat(4, 140px);
  grid-gap: 20px;
  color: #444;
}
</style>