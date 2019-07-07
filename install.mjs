import States from './libs/states';



export default function install(Vue, options){

	Vue.mixin({
		beforeCreate(){
			this._states = new States();
			Vue.util.defineReactive(this, '_states', this._states);
		}
	});

	/**
	 * @type {States}
	 */
	Object.defineProperty(Vue.prototype, '$states', {
		get(){ return this._states }
	});

}