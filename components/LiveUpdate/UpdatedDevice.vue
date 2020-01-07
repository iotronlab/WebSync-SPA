<template>
  <v-card>
    <v-card-title>{{device.device_name}} was updated</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    device: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
</style>