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
      <v-toolbar-title>Application</v-toolbar-title>
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
import { mapActions, mapMutations } from "vuex";
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
    this.$echo.channel('home')
      .listen('StatusUpdate', (e) => {
          console.log(e.message);
      });
  },
   
  methods: {
    ...mapActions(["callUpdateNavMenu"]),
    async initialize() {
      await this.callUpdateNavMenu();
    }
  }
};
</script>

<style>
</style>
