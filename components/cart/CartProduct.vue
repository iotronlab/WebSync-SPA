<template>
	<v-row>
		<v-col cols="12" sm="12" md="4">
			Product image
		</v-col>
		<v-col cols="12" sm="12" md="4">
			Product name
		</v-col>
		<v-col cols="12" sm="12" md="2">
			Product Price
		</v-col>
		<v-col cols="12" sm="12" md="2">
			<v-btn rounded @click.prevent="destroy(product.id)">Remove</v-btn>
		</v-col>
	</v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'CartProduct',
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	methods: {
		...mapActions('cart',['destroy'])
	}
}
</script>

<style>

</style>