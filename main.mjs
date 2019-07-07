import States from './libs/states';



export function install(Vue, options){

	Vue.mixin({
		data(){
			return {
				$states: new States()
			};
		}
	});

}