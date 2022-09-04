<template>
  <div class="home">
    <h1>Всем привет.</h1>
    <p>Тут возможно появятся некоторые приколдесы, так что ждите.</p>
    <p>
      Пока есть некоторые дополнительные домены с которыми можно потыкатся (но
      требуют допусков так что спращивайте владельца этих тулзов)
    </p>
    <p>Вот что есть:</p>
    <ul>
      <li>
        <a href="https://placeholder.pro" target="_blank">placeholder.pro</a> -
        это то где мы
      </li>
      <li>
        <a href="https://docker.placeholder.pro" target="_blank"
          >docker.placeholder.pro</a
        >
        - мой приватный реест докер контейнеров(морда докер реестра)
      </li>
      <li>
        <a href="https://portainer.placeholder.pro" target="_blank"
          >portainer.placeholder.pro</a
        >
        - это интерфейс для работы с докером (в основном для рееста сделана но
        по факту мультизадачна)(будет заменена на гитлаб)
      </li>
      <li>
        <a href="/pairs" target="_blank"
          >pairs.placeholder.pro</a
        >
        - Игруля на vue
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  text-align: justify;
  margin: 40px;
}

a {
  font-weight: bold;
  color: rgb(146, 146, 146);
}

a:visited {
  color: rgb(81, 81, 81);
}
</style>
