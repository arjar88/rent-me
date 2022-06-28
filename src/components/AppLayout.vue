<template>
  <!-- pages that you want to be displayed by the router should be wraped in an ion-page component,it will add animations -->
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start"
          ><ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button
        ></ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> <slot /> </ion-content>
    <tabs />
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
import Tabs from "./Tabs.vue";
export default {
  name: "AppLayout",
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    Tabs,
  },
};
</script>
