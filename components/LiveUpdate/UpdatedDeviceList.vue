<template>
  <v-container fluid>
    <v-row v-for="updatedDevice in updatedDeviceList" :key="updatedDevice.id">
      <UpdatedDevice :device="updatedDevice" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import UpdatedDevice from "@/components/LiveUpdate/UpdatedDevice";
export default {
  components: {
    UpdatedDevice
  },
  computed: {
    ...mapGetters({
      updatedDeviceList: "updatedDeviceList"
    })
  }
};
</script>

<style>
</style>