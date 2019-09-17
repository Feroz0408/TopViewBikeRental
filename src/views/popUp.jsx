import React from "react";
import Popup from "reactjs-popup";
import "./popUp.css"

export default class PopUp extends React.Component{
    render() {
        return (
            <Popup  trigger={<button id="idd" ref={this.props.popUpTrigger}  style={{display:"none"}}/>} modal>
                        {close => (
                        <div className="modal">
                        {/* <a className="close" onClick={close}> */}
                    {/* &times; */}
                    {/* </a> */}
                    <div className="header"> Booking Successfull </div>
                    <div className="content">
                    {" "}
                    Hi {this.props.userName}, Your Booking is done. Happy Cycling.
                    <br />
                    </div>
                    <div className="actions">
                    <button
                        className="button"
                        onClick={this.props.clicker}
                    >
                        close 
                    </button>
                    </div>
                </div>
                )}
            </Popup>
        )
    }
}


