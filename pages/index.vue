<template>
  <v-app class="content">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-switch
              v-for="device in devices"
              :key="device.id"
              :label="device.name"
              :device="device"
              v-model="device.status"
              @change="update({id: device.id, status: device.status})"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-sheet>
      <v-card-title>Live Notifications</v-card-title>
      {{updatedDeviceList.length}}
      <UpdatedDeviceList />
      {{updatedDeviceList}}
    </v-sheet>
  </v-app>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

import UpdatedDeviceList from "@/components/LiveUpdate/UpdatedDeviceList.vue";

export default {
  components: {
    UpdatedDeviceList
  },

  computed: {
    ...mapGetters({
      devices: "devices",
      updatedDevice: "updatedDevice",
      updatedDeviceList: "updatedDeviceList"
    })
  },
  methods: {
    ...mapActions({
      update: "update"
    })
  }
};
</script>
<style scoped>
</style>





