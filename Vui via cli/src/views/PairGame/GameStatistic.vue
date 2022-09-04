<template>
  <h3>Клики: {{ clicks }}</h3>
  <h3>Собрано: {{ collected }} из {{ total }}</h3>
</template>

<script>
export default {
  props: ["clicks", "collected", "total"],
};
</script>