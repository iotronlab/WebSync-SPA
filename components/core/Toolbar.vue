<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-side-icon  /> -->

      <v-container fluid px-0>
        <v-row no-gutters>
          <v-col class="d-flex align-center">
            <nuxt-link :to="{ name: 'index'}">
              <v-img src="/butiq.png" contain height="90" width="90" max-width="90" />
            </nuxt-link>
            <!-- nav categories -->
            <v-col class="hidden-sm-and-down">
              <v-col class="d-flex align-center">
                <v-col v-for="category in categories.data" :key="category.slug">
                  <v-menu
                    open-on-hover
                    :close-on-content-click="false"
                    class="hidden-sm-and-down"
                    bottom
                    offset-y="5"
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :to="{ name: 'categories-slug', params: { slug: category.slug} }"
                        text
                        rounded
                        v-on="on"
                      >{{category.name}}</v-btn>
                    </template>

                    <v-card width="600px" height="300px">
                      <v-row class="mx-2">
                        <v-col cols="4" v-for="children in category.children" :key="children">
                          <v-row>
                            <v-list flat dense height="30px" rounded>
                              <v-list-item
                                :to="{ name: 'categories-slug', params: { slug: children.slug} }"
                              >
                                <v-list-item-title class="primary--text">{{children.name}}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-row>

                          <v-row v-for="subchildren in children.children" :key="subchildren">
                            <v-list flat dense height="30px" rounded>
                              <v-list-item
                                :to="{ name: 'categories-slug', params: { slug: subchildren.slug}}"
                              >
                                <v-list-item-subtitle
                                  class="category-sub-child"
                                >{{subchildren.name}}</v-list-item-subtitle>
                              </v-list-item>
                            </v-list>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-menu>
                </v-col>
              </v-col>
            </v-col>
          </v-col>

          <v-col class="d-flex justify-end align-center">
            <v-col class="hidden-sm-and-down mx-2">
              <v-text-field
                append-icon="mdi-magnify"
                label="Customise your Style"
                hide-details
                outlined
                rounded
                dense
              />
            </v-col>
            <span class="hidden-sm-and-down mx-2">
              <Login />
            </span>
            <v-btn class="hidden-md-and-up mr-2" small outlined fab color="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <!-- <v-btn color="primary" dark class="hidden-sm-and-down">Login</v-btn> -->
            <v-badge overlap>
              <span slot="badge">{{ cartCount }}</span>
              <v-btn :to="{ name: 'cart'}" rounded outlined color="primary">
                Cart
                <v-icon right>mdi-cart</v-icon>
              </v-btn>
            </v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Login from "@/components/Login";
export default {
  components: {
    Login
  },
  data() {
    return {
      item: 1,
      hover: false
    };
  },
  computed: {
    ...mapGetters({
      categories: "layout/categories"
    })
    //...mapState({

    //  categories: state => state.layout.categories
    //})
  }
};
</script>


<style scoped>
.category-sub-child:hover {
  font-weight: medium;
  color: purple;
}

.category-child-women {
  color: red;
  font-weight: bold;
}
.category-child-art {
  color: green;
  font-weight: bold;
}
</style>
