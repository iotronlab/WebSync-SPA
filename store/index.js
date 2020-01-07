export const strict = false

export const state = () => ({
	devices: [],
	updatedDevice: Object,
	updatedDeviceList: []
})

export const getters = {
	devices(state) {
		return state.devices
	},
	updatedDevice(state) {
		return state.updatedDevice
	},
	updatedDeviceList(state) {
		return state.updatedDeviceList
	}
}

export const mutations = {
	SET_DEVICES(state, devices) {
		state.devices = devices
	},
	SET_UPDATEDDEVICE(state, updatedDevice) {
		state.updatedDevice = updatedDevice
		state.updatedDeviceList.splice(0, 0, updatedDevice)

	},


}

export const actions = {
	async initiateDevice({
		commit
	}) {
		let response = await this.$axios.$get('/devices')

		commit('SET_DEVICES', response.data)


	},
	async update({
		dispatch
	}, {
		id,
		status
	}) {
		let response = await this.$axios.$patch(`/devices/update`, {
			id,
			status
		})
		console.log(response)
		dispatch('initiateDevice')
	},
	async updateDevice({
		commit,
		dispatch
	}) {
		await this.$echo.channel("home").listen("StatusUpdate", e => {
			console.log(e.device)
			commit('SET_UPDATEDDEVICE', e.device)

			dispatch('initiateDevice')


		});

	}
}