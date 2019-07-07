import Vue from 'vue'
import VState from '..'

Vue.use(VState);

new Vue({
	render: h => h({

		beforeMount(){
			this.$states.add('loading')
		},

		template:
			`
			<template>
				<div v-if="$states.is('loading')">
					IS LOADING
				</div>
			</template>
			`
	})
}).$mount('#app');