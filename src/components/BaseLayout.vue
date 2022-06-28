<template>
  <!-- pages that you want to be displayed by the router should be wraped in an ion-page component,it will add animations -->
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start"></ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content> <slot /> </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";

export default {
  name: "HomePage",
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
  },
};
</script>
