import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Om Mig</span>
                    <h2 className="colorlib-heading">Hvem jeg er?</h2>
                    <p>Min familie og jeg er flyttet til København. Vi er faldet godt til, Jacob på hans arbejde, pigerne i skolen og jeg er klar på nye udfordringer.</p>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">HVAD JEG GØR?</span>
                <h2 className="colorlib-heading">Mine Størkeste kompetencer er</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>STRUKTURERET </h3>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>KOMPETENT </h3>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>ANSVARSBEVIDST OG DYGTIG TIL RELATIONER</h3>
                    <p></p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>RESULTATORIENTERET</h3>
                    <p>Viden om rekruttering, sætter mål og resultatorienteret, eksekver til tiden, bredt kendskab til
                    arbejdsmarkedet – Stærke relationelle og tillidsskabende kompetencer, service DNA – og
                    løsningsorientret i din tilgang, både over for virksomheder, kandidater og kolleger</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                </div>
                <div className="desc">
                <h3>HOLDSPILLER OG SELVSTÆNDIGT</h3>
                <p>Arbejder selvstændigt, performer også i teams. Stempler ind med godt humør og et positivt,
                helhedsorienteret menneskesyn</p>
            </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
