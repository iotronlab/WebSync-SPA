<template>
  <div>
    <v-sheet class="mx-auto hidden-md-and-up" elevation="2" max-width="400">
      <v-slide-group v-model="model">
        <v-row no-gutters class="d-flex justify-center">
          <v-slide-item v-for="item in items" :key="item" v-slot:default="{ active, toggle }">
            <v-card class="mx-1 my-2" width="120" exact v-bind:to="item.to" raised outline>
              <v-img class="white--text" max-height="160" v-bind:src="item.sr">
                <div class="mt-1 ml-2">{{item.title}}</div>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-row>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Men",
          to: "/",
          sr: "/man.jpg"
        },
        {
          title: "Women",
          to: "/inspire",
          sr: "/women.jpg"
        },

        {
          title: "Art and Craft",
          to: "/",
          sr: "art.jpg"
        }
      ],
      model: null
    };
  }
};
</script>

<style>
</style>
