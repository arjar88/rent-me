<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="HomePage" href="/tabs/home">
            <ion-icon class="tab-icons" :icon="home" />
            <ion-label></ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Profile" href="/tabs/profile">
            <ion-icon class="tab-icons" :icon="person" />
            <ion-label></ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Messages" href="/tabs/message">
            <ion-icon class="tab-icons" :icon="chatbubbles" />
            <ion-label></ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { home, person, chatbubbles } from "ionicons/icons";

export default {
  // eslint-disable-next-line
  name: "Tabs",
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      home,
      person,
      chatbubbles,
    };
  },
};
</script>

<style scoped>
.tab-icons {
  font-size: 2.5em;
}
</style>
