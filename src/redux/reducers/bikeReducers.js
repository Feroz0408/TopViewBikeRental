

export const UPDATE_BIKE_SELECTION = "UPDATE_BIKE_SELECTION";

export const RESET = "RESET";

const initialState = {
	userName: "",
	bikeName: "",
	accessories: "",
	insurance:"",
	totalPrice: 0

};


const BikeReducers = (state = initialState, action) => {
	switch (action.type) {

	case  UPDATE_BIKE_SELECTION :
		return {
			...state, ...action.payload
		};

	case RESET :
		return {
			...initialState
		};

	default :
		return state;

	}

};


export default BikeReducers;