<template>
  <base-layout page-title="Home" page-default-back-link="/tabs/home">
    <ion-searchbar class="search-bar"></ion-searchbar>
  </base-layout>
</template>

<script>
import { IonSearchbar, IonButton } from "@ionic/vue";

export default {
  name: "HomePage",
  components: { IonSearchbar, IonButton },
};
</script>

<style scoped>
.search-bar {
  --border-radius: 2em;
  --icon-color: "blue";
}
</style>
