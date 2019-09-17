import {UPDATE_BIKE_SELECTION, RESET} from "../reducers/bikeReducers";


export const reset =(dispatch, fieldAndValueObject)=>dispatch({
	type : RESET,
	payload : fieldAndValueObject
});


export const updateUserSelection =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_BIKE_SELECTION,
	payload : fieldAndValueObject
});


