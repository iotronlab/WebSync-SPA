export default {
	async callUpdateNavMenu({
		commit
	}) {
		console.log('called')
		const response = await this.$axios.$get('/devices')
		commit('setNavMenu', response.data)
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