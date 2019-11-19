export const strict = false

export const state = () => ({
	devices: []
})

export const getters = {
	devices(state) {
		return state.devices
	}
}

export const mutations = {
	SET_DEVICES(state, devices) {
		state.devices = devices
	}
}

export const actions = {
	async callUpdateNavMenu({
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

		dispatch('callUpdateNavMenu')
	},
}