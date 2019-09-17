import React from 'react';
import "./bikes.css";
import { connect } from "react-redux";
import { updateUserSelection } from "../redux/actions/bikeActions"
import { Cart } from 'react-cart-components'
import PopUp from "./popUp";
import Cards from "./Cards";


class Bikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'bikes',
      popUpTrigger: false,
      buttonClose: false,
      bikeData: ""
    }
  }

  async componentDidMount() {
    const bikeData =  await require('../bikerentals.json');
     this.setState({ bikeData: bikeData })
  }

  bikeSelection = () => {
    let result = this.props.cart.products.map(function (name, i) { 
    if(name.name.includes("Bike")){
      return true;
      }
      return false
      })
    if(this.props.cart.products.length && result.includes(true)){
      this.setState({ popUpTrigger: true });
      this.setState({ buttonClose: true });
    }
    else alert("Please Select a Bike First")
  }

  onPopUpClose = () => {
    this.setState({ popUpTrigger: false })
    localStorage.clear();
    this.props.history.push('/')
  }

  render() {
    if (this.state.popUpTrigger) {
      let el = document.getElementById("idd");
      el.click();
    }

    if(!this.state.bikeData) {
      return <div></div>
    }
    return (
      <div className="bikes">
        <h1>Welcome to TopView's Bike Rental</h1>
        <PopUp clicker={() => this.onPopUpClose()} userName ={this.props.userName} />
        <div className={this.state.popUpTrigger ? "buttonClose" : ""}  >
          <Cart currency="USD" checkoutTextLabel={"Finish Booking"} handleCheckout={() => this.bikeSelection()} />
        </div>
        <div style={{display:"flex"}}>
          <div  className="cardsContainer">
          <h2> Select Your Bike</h2>
            {this.state.bikeData.products.map((product, key) => {
              return (product.product_type === "bike" ? <Cards key={key} product={product} /> : "");
            })}
          </div>

          <div className="cardsContainer">
          <h2>Select Accessories</h2>
            {this.state.bikeData.products.map((product, key) => {
              return (
                product.product_type === "accessory" ? <Cards key={key} product={product} /> : ""
              );
            })}
          </div>
          <div className="cardsContainer">
          <h2>Select Addons</h2>
            {this.state.bikeData.products.map((product, key) => {
              return (
                product.product_type === "addon" ? <Cards key={key} product={product} /> : ""
              );
            })}
          </div>
          </div>

        </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    bikeName: state.BikeReducers.bikeName,
    price: state.BikeReducers.totalPrice,
    cart: state.cart,
    userName: state.BikeReducers.userName,
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateUserSelection: (updatedValue) => updateUserSelection(dispatch, updatedValue),
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Bikes);
