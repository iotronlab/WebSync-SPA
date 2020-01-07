<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <h2 class="headline">WebSync</h2>
      <v-spacer></v-spacer>
      <v-badge color="green" overlap left>
        <template v-slot:badge>
          <span v-if="list.length > 0">{{ list.length }}</span>
        </template>
        <v-btn icon small>
          <v-icon id="notifyicon" large>mdi-bell-ring-outline</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/core/Footer";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Footer
  },
  data: () => ({
    drawer: false
  }),
  mounted() {
    console.log("mounted");
    this.initialize();
  },

  methods: {
    ...mapActions(["initiateDevice", "updateDevice"]),
    async initialize() {
      await this.initiateDevice();
      await this.updateDevice();
    }
  },
  computed: {
    ...mapGetters({
      list: "updatedDeviceList"
    })
  },
  watch: {
    list(list) {
      document.getElementById("notifyicon").classList.remove("notify");
      void document.getElementById("notifyicon").offsetWidth;
      document.getElementById("notifyicon").classList.add("notify");
      //    setTimeout(
      //    () => document.getElementById("notifyicon").classList.remove("notify"),
      //      1
      //    );
      console.log("list updated");
    }
  }
};
</script>

<style scoped>
.notify {
  animation: bell 1s ease-out;
  transform-origin: center top;
}

@keyframes bell {
  0% {
    transform: rotate(35deg);
  }
  12.5% {
    transform: rotate(-30deg);
  }
  25% {
    transform: rotate(25deg);
  }
  37.5% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(15deg);
  }
  62.5% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>


