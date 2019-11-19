import state from './state'
export default {

	setNavMenu(state, devices) {

		state.devices = devices

	},
	mergeDevice(state, form) {
		assign(state.car, form)
	},
	setDevice(state, form) {
		state.car = form
	}

}