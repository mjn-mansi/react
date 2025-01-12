import React from "react";
import "../styles/About.css"

function About() {
    return (
        <div className="container" id="about">
            <div className="row">
                <div className="col-lg-8 col-12 about-block">
                    <h2 className="title">About <span>Lorem, ipsum.</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officiis voluptatem id iusto unde. Doloribus delectus veritatis nulla nam laudantium excepturi minus impedit ipsa autem tempora, dignissimos blanditiis, rerum numquam molestiae tempore libero! Necessitatibus accusantium perferendis quia doloremque ea amet, ipsa ratione voluptatem laudantium, distinctio, reprehenderit commodi optio tempore id.</p>
                </div>
                <div className="col-lg-4 col-12 text-center">
                    <img src="./images/doctor.avif" alt="Doctor" className="about-img" />
                </div>
            </div>
        </div>
    )
}

export default About