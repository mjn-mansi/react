import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../styles/Offer.css"

function Offer() {
    return (
        <div className="container" id="offer">
            <h2 className="title">What we Offer</h2>
            <div className="row">
                <div className="col-lg-3 col-6 offer-block">
                    <FontAwesomeIcon icon={faStethoscope} size="5x" />
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates facere inventore provident autem itaque!</p>
                </div>
                <div className="col-lg-3 col-6 offer-block">
                    <FontAwesomeIcon icon={faStethoscope} size="5x" />
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates facere inventore provident autem itaque!</p>
                </div>
                <div className="col-lg-3 col-6 offer-block">
                    <FontAwesomeIcon icon={faStethoscope} size="5x" />
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates facere inventore provident autem itaque!</p>
                </div>
                <div className="col-lg-3 col-6 offer-block">
                    <FontAwesomeIcon icon={faStethoscope} size="5x" />
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates facere inventore provident autem itaque!</p>
                </div>
            </div>
        </div>
    )
}

export default Offer