<template>
  <base-layout page-title="Profile">
    <ion-grid class="tw-pt-7">
      <ion-row>
        <ion-col class="tw-pl-5">
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
        </ion-col>
        <ion-col class="ion-align-items-center">
          <div class="tw-font-medium tw-text-2xl ion-text-center">
            User Name
          </div>
        </ion-col>
      </ion-row>
      <ion-row class="tw-pt-9">
        <ion-col>
          <ion-button shape="round" expand="block">My Assets</ion-button>
        </ion-col>
      </ion-row>
      <ion-row class="tw-pt-3">
        <ion-col>
          <ion-button shape="round" expand="block">My Friends</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid></base-layout
  >
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import {
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/vue";
export default {
  components: {
    BaseLayout,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonButton,
  },
  name: "ProfilePage",
};
</script>

<style scoped></style>
