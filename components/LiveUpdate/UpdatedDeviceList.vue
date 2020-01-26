<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col
        v-for="updatedDevice in updatedDeviceList"
        :key="updatedDevice.id"
        cols="12"
        md="4"
        class="pa-1"
      >
        <UpdatedDevice :device="updatedDevice" />
      </v-col>
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