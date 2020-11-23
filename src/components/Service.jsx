import React from 'react';
import machine from '../images/ai3.gif';
import android from '../images/android.gif';
import data from '../images/data.gif';
import web from '../images/web.gif';
import digital from '../images/digital.gif';
import deep from '../images/deep.gif';

const Service = () => {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center text-light">Our Services</h1>
    </div>
    <div className="container-fluid mb-5 mt-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-5">
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={machine} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Machine Learning</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Machine Learning</a>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={deep} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title"> Deep Learning</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Deep Learning</a>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={data} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Data Science</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Data Science</a>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={android} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Android Dev</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Android Development</a>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Web Development</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Web Development</a>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mx-auto">
            <div className="card">
                  <img src={digital} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">Digital Marketing</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Learn Digital Marketing</a>
                  </div>
                </div>
            </div>

          </div>
        </div>

      </div>

    </div>
    </>
  );
}

export default Service;
