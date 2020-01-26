<template>
  <v-app class="content">
    <v-card>
      <v-tabs background-color="white" color="deep-purple accent-4" right>
        <v-tab>Drawing Room</v-tab>
        <v-tab>Bed Room</v-tab>
        <v-tab>Kitchen</v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-container class="pa-1">
            <v-row no-gutters>
              <v-col v-for="device in devices" :key="device.id" cols="12" md="4" class="pa-1">
                <v-card shaped class="pa-1">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-img src="lamp.svg" width="64" height="64" />
                    </div>
                    <div>
                      <v-card-title class="font-weight-light">{{device.name }}</v-card-title>
                    </div>
                    <div class>
                      <v-switch
                        inset
                        color="green"
                        :device="device"
                        v-model="device.status"
                        @change="update({id: device.id, status: device.status})"
                      ></v-switch>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <v-sheet>
      <v-card-title class="pb-0">Live Notifications ({{updatedDeviceList.length}})</v-card-title>

      <UpdatedDeviceList />
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





