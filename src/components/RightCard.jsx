import React from "react";
import "../styles/About.css";

function RightCard({ title, information, img }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-5">
          <div className="col-lg-5 order-2 order-lg-1">
            <h2 className="display-4">{title}</h2>
            <section className="d-flex flex-column justify-content-center align-items-center">
              <p className="lead text-muted">{information}</p>
            </section>
          </div>
          <div className="col-lg-7 px-5 mx-auto order-1 order-lg-2">
            <img src={img} alt="" className="img-fluid mb-4 mb-lg-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightCard;
