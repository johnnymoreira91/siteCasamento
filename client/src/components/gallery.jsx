import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
            <p>
              Aqui vai um Pouco sobre nós, sobre nossa historia
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/saidyes.jpeg"
                      title="She Said Yes"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>She Said Yes</h4>
                      </div>
                      <img
                        src="img/nos/saidyes.jpeg"
                        className="img-responsive"
                        alt="She said Yes"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/socorro.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Trip, Socorro-Sp</h4>
                      </div>
                      <img
                        src="img/nos/socorro.jpeg"
                        className="img-responsive"
                        alt="Volta por Socorro-sp"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/johnnywicklow.jpeg"
                      title="Wicklow Trip"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Wicklow Trip</h4>
                      </div>
                      <img
                        src="img/nos/johnnywicklow.jpeg"
                        className="img-responsive"
                        alt="Wicklow Trip"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/amandaalemanha.jpeg"
                      title="Viagem Alemanha"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Viagem Alemanha</h4>
                      </div>
                      <img
                        src="img/nos/amandaalemanha.jpeg"
                        className="img-responsive"
                        alt="Viagem Alemanha"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/socome.jpeg"
                      title="Tops Restaurantes"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Comemos muito?</h4>
                      </div>
                      <img
                        src="img/nos/socome.jpeg"
                        className="img-responsive"
                        alt="Comemos muito"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/noisdois.jpeg"
                      title="Nois dois"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4> Nois dois</h4>
                      </div>
                      <img
                        src="img/nos/noisdois.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/ship.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Travelling to Hollyhead</h4>
                      </div>
                      <img
                        src="img/nos/ship.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/franca.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Paris</h4>
                      </div>
                      <img
                        src="img/nos/franca.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/flor.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Primeira flor</h4>
                      </div>
                      <img
                        src="img/nos/flor.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
