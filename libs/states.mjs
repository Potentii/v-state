export default class States{

	constructor(){
		this._active = [];
	}



	/**
	 * Activate the given state
	 * @param {String} state The state name to be activated
	 */
	add(state){
		if(!this.is(state))
			this._active.push(state);
	}



	/**
	 * Deactivate the given state
	 * @param state The state name to be deactivated
	 */
	remove(state){
		const index = this._active.indexOf(state);
		if(index > -1)
			this._active.splice(index, 1);
	}



	/**
	 * Toggle a given state, if it's active, it will be deactivate and so on
	 * @param state The state name to be toggled
	 */
	toggle(state){
		if(this.is(state))
			this.remove(state);
		else
			this.add(state);
	}



	/**
	 * Checks if the given state is currently active
	 * @param {String|String[]|String...} state The state name to be checked
	 * @returns {boolean} Whether the state is active or not
	 */
	is(state){
		if(Array.isArray(state))
			return this.every(...state);

		if(arguments.length > 1)
			return this.every(...arguments);

		return this._active.includes(state);
	}



	/**
	 * Checks if the given state is not currently active
	 * @param {String} state The state name to be checked
	 * @returns {boolean} Whether the state is not active
	 */
	not(state){
		if(Array.isArray(state))
			return !this.some(...state);

		if(arguments.length > 1)
			return !this.some(...arguments);

		return !this.is(state);
	}



	some(...states){
		states = [...states].flat();

		if(states.length === 0 || arguments.length === 0)
			return this._active.length === 0;

		return states.some(s => this.is(s));
	}



	every(...states){
		states = [...states].flat();

		if(states.length === 0 || arguments.length === 0)
			return this._active.length === 0;

		return states.every(s => this.is(s));
	}



	none(...states){
		states = [...states].flat();

		if(states.length === 0 || arguments.length === 0)
			return this._active.length === 0;

		return states.every(s => this.not(s));
	}



	/**
	 * Get all states that are currently active
	 * @returns {String[]}
	 */
	get current(){
		return [...this._active];
	}

}
