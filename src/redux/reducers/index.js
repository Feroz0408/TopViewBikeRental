import {combineReducers} from "redux";
import BikeReducers from "../reducers/bikeReducers";
import { CartReducers } from 'react-cart-components'


const combinedReducers = combineReducers({ BikeReducers, cart: CartReducers});

export default  combinedReducers;