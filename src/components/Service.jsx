import React from "react";
import "../styles/Service.css"

function Service() {
    return (
        <div className="container" id="service">
            <h2 className="title">Our Service</h2>
            <div className="row">
                <div className="col-lg-3 col-6 service-block">
                    <img src="images/services/lab.webp" alt="" />
                    <h3>Blood Work</h3>
                </div>
                <div className="col-lg-3 col-6 service-block">
                    <img src="images/services/flushot.webp" alt="" />
                    <h3>Flu Shot</h3>
                </div>
                <div className="col-lg-3 col-6 service-block">
                    <img src="images/services/mentalHealth.webp" alt="" />
                    <h3>Mental Health</h3>
                </div>
                <div className="col-lg-3 col-6 service-block">
                    <img src="images/services/physicalExam.webp" alt="" />
                    <h3>Physical Exam</h3>
                </div>
            </div>
        </div>
    )
}

export default Service;