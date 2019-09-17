import React from "react";
import {AddCartButton } from 'react-cart-components';
import "./Cards.css";

export default class Cards extends React.Component {
    render(){
        return(
            <div className="cardBody" key={this.props.product.key}>
              <div className="pi-pic" style={{position:"relative"}}>
                 <img src={this.props.product.image} alt="bike" height="120px" width="150px" />
                  <p id="priceText">{this.props.product.price}$</p>
                  <p>{this.props.product.name} </p>
                    <AddCartButton
                      product={this.props.product}
                      styles={{ backgroundColor: '#009688', color: 'white', padding:"3%", paddingBottom:"3%", minWidth:"70px", border: '0' }}
                    />
              </div>
    
          </div>
        )
    }
}