<template>
  <base-layout page-title="Home" page-default-back-link="/tabs/home">
    <ion-card class="tw--mr-2 tw--ml-2 tw--mt-2 tw-shadow-none tw-bg-blue-400"
      ><ion-card-content>
        <div class="tw-flex tw-flex-col tw-pl-4 tw-pt-4">
          <ion-card-subtitle class="tw-text-white tw-font-light"
            >Location</ion-card-subtitle
          >
          <span
            class="tw-text-white tw-font-sans tw-font-medium tw-text-md tw-text-justify"
            >16 Dizingof st. ,Tel Aviv ,Israel</span
          >
        </div>

        <ion-searchbar
          class="search-bar tw-pt-5"
        ></ion-searchbar> </ion-card-content
    ></ion-card>
    <ion-grid>
      <ion-row>
        <ion-col> </ion-col>
      </ion-row>
      <ion-row class="tw-pt-7">
        <ion-col>
          <ion-card class="tw-rounded-lg tw-shadow-md">
            <ion-card-content>
              <ion-grid>
                <ion-row
                  ><ion-col
                    ><img src="../../public/assets/pictures/fridge.jpg" alt=""
                  /></ion-col>
                  <ion-col class="tw-pt-4">
                    <ion-row>
                      <ion-col>
                        <span class="tw-text-xl tw-font-sans tw-font-medium"
                          >Fridges in your area!</span
                        >
                      </ion-col>
                    </ion-row>
                    <ion-row class="tw-pt-4">
                      <ion-col>
                        <ion-button
                          class="tw-bg-sky-500 tw-font-sans tw-font-medium tw-normal-case"
                          >Shop Now</ion-button
                        >
                      </ion-col>
                    </ion-row>
                  </ion-col></ion-row
                >
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import {
  IonSearchbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  name: "HomePage",
  components: {
    IonSearchbar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
  },
};
</script>

<style scoped>
.search-bar {
  --border-radius: 2em;
  --icon-color: "blue";
}
</style>
