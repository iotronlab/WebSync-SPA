<template>
  <v-footer dark height="auto">
    <v-container mx-auto>
      <v-divider vertical light inset></v-divider>

      <v-row no-gutters>
        <v-col>
          <v-img src="/butiq.png" height="40" width="90" contain></v-img>
          <base-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text="item.icon" />
          </base-btn>
        </v-col>

        <v-col>
          SiteMap
          <br />
          <br />

          <a href="#">About Us</a>
          <br />
          <a href="#">Contact Us</a>
          <br />
          <a href="#">Privacy Policy</a>
        </v-col>

        <v-col>
          <pre>
         ADDRESS:
         335, Dum Dum Road,
         Kolkata - 700074.
         </pre>
        </v-col>
      </v-row>

      <v-row col wrap>
        <v-flex 6 xs9 sm md4 lg4></v-flex>
        <v-spacer />
        <base-btn class="mr-0" square title="Go to top" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        href: "#!",
        icon: "mdi-twitter"
      },
      {
        href: "#!",
        icon: "mdi-instagram"
      },
      {
        href: "#!",
        icon: "mdi-facebook"
      },
      {
        href: "#!",
        icon: "mdi-google"
      }
    ]
  })
};
</script>
