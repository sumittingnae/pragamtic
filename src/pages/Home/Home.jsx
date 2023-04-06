import React from "react";
import Header from "../../component/header/header";
//import Hero from "../../component/Hero/hero";
import './Home.scss'
import Slider from "../../component/carsoul/silder";


function home(){
    return(
        <>
        <Header/>
        <Slider/>
      <div className="title" id="our">
         <p >Our Serives</p>
      </div>
          <div className="container">
            <div className="card ">
            <img src="/react2.jpg" alt="" />
            <div className="card-body ">
                <h5 className="card-title">React js</h5>
                <p className="card-text">Some quick example text to build on 
            the card title and make up the bulk of the card's content. Some quick example text to build on 
            the card title and make up the bulk of the card's content.       </p>

            </div>
        </div>
        <div className="card ">
            <img src="/php.jpg" alt="" />
            <div className="card-body ">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>
         <div className="card ">
            <img src="/Social tree.gif" alt="" />
            <div className="card-body ">
                <h5 className="card-title">Social Mediea Marketing</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>
        
          </div>

          {/* client */}
          <div className="client" id="client">
            <div className="">
            <div className="title">
                <p> Our Client</p>

            </div>
          
            <div className="col-6" id="client-img">
                <img src="/cl-1.jpg" alt="cl-1" />
                <img src="/cl-2.jpg" alt="cl-2" />
                <img src="/cl-3.jpg" alt="cl-3" /><br />
                <img src="/cl-4.jpg" alt="cl-4" />
                <img src="/cl-5.jpg" alt="cl-5" id="cl-5" />
                {/* <img src="/cl-1.jpg" alt="cl-1" /> */}

            </div>
              </div>

          </div>
          
          
       
        </>
    )
}
export default home;