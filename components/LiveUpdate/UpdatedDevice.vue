<template>
  <v-card outlined>
    <v-card-title class="overline">{{device.device_name}} was updated</v-card-title>
    <v-card-subtitle class="overline">{{time}}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    time: null
  }),
  props: {
    device: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.currentime();
  },
  methods: {
    async currentime() {
      // Use of Date.now() function
      let d = new Date();

      // Converting the number of millisecond in date string
      let day = d.getDay().toString();
      let date = d.getDate();
      let month = d.getMonth().toString();
      let hr = d.getHours();
      let min = d.getMinutes();
      this.time = d.toString();
      // Printing the current date
    }
  }
};
</script>

<style>
</style>