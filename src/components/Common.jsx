import React from 'react';
import ai from '../images/ai.gif';
import {NavLink} from 'react-router-dom';

const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center py-5">
        <div className="container-fluid section">
            <div classsName="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 text-light d-flex justify-content-center flex-column">
                    <h1> {props.name} <strong className="brand-name">TechClass</strong></h1>
                    <p className="my-3">
                        We are the team of talented and passionate web developers
                    </p>
                    <div className="mt-4">
                        <NavLink to={props.visit} className="btn-get-started px-5 py-3">{" "}{props.btname} {" "}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid" alt="Home Image " />

                </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
