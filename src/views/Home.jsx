import React from 'react';
import {connect} from "react-redux";
import {updateUserSelection, reset} from "../redux/actions/bikeActions"
import "./Home.css";

class Home extends React.Component {

  navigateToBookingPage = (element) => {
    if(this.props.userName.length) {
      this.props.history.push("/Booking")
    }
    else alert("Please enter your Name")
  }

  updateUserOption = (element) => {
    this.props.updateUserSelection({userName: element.target.value});
  }

  componentWillMount() {
    this.props.reset({})
  }

  
  render () {
    return (
      <div className="homeContainer">
      <div className= "loginContainer">
        <h1> Welcome to TopView's Bike Rental </h1>
          <div className="inputContainer"> 
              <input className="text_Input" placeholder="Enter your Name" type="text" onChange={(e) => this.updateUserOption(e)}></input>
          </div>
          <div className="nextLoginButtonContainer" onClick={() => this.navigateToBookingPage()}>
              <input type="button" name="START BOOKING"  value="START BOOKING"/>
          </div>
      </div>
  </div>
  );
  }
}


const mapStateToProps = (state) => {
  return {
    userName : state.BikeReducers.userName, 
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUserSelection: (updatedValue) => updateUserSelection(dispatch, updatedValue),
  reset: (updatedValue) => reset(dispatch, updatedValue),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
