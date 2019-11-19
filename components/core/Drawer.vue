<template>
  <v-navigation-drawer v-model="drawer" app temporary class="drawer">
    <v-list shaped>
      <v-list-item>
        <!-- <v-btn color="primary" dark>Login</v-btn> -->
        <Login />
      </v-list-item>

      <v-subheader>Categories</v-subheader>
    </v-list>

    <template>
      <v-list nav avatar shaped>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group v-for="item in categories.data" :key="item">
          <template v-slot:activator>
            <v-list-item-avatar>
              <v-img src="/icon.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </template>

          <v-list-group no-action sub-group v-for="children in item.children" :key="children">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{children.name}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link v-for="subchildren in children.children" :key="subchildren">
              <v-list-item-title>{{subchildren.name}}</v-list-item-title>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-item>
          <v-switch v-model="$vuetify.theme.dark" color="primary" label="Dark"></v-switch>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";
import Login from "@/components/Login";
export default {
  name: "Drawer",
  components: {
    Login
  },

  computed: {
    ...mapState({
      drawer: state => state.layout.drawer,
      items: state => state.layout.items,
      categories: state => state.layout.categories
    }),
    dummy() {}
  },

  data: () => ({
    avatar: "/butiq.png"
  }),
  mounted() {},

  methods: {
    ...mapMutations("layout", ["setDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to === "/") {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href);
      this.setDrawer(false);
    }
  }
};
</script>

<style scoped>
.drawer {
  z-index: 300;
}
</style>
