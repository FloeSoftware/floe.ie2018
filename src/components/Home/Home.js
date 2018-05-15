// @flow

import React, { Component } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

import Logo from './floe-logo.svg'
import './Home.scss'

import projectPlanning from './floe-software-project-planning.jpg'
import productWireframing from './floe-software-wireframing.jpg'
import dublin from './dublin.jpg'
import michaelBradley from './michael-bradley.jpg'


class Home extends Component {
  render() {

    return (
      <div className="Home">

        <div className="Home-viewPort">        
        
          <header className="Home-header">
            <div className="Home-headerUpper">
              <div className="Home-headerUpper-logo">          
                <img src={Logo} width={140} alt="FLOE Software Logo" />
              </div>
              <div className="Home-headerUpper-phone">
                <a href="tel:+35315563288">+353 (0)1 556 3288</a>
              </div>
            </div>

            <div className="Home-headerLower">
              A software, strategy and design consultancy
            </div>
          </header>

          <article className="Home-highLevel">
            <h1>Exceptional digital products for forward-thinking businesses and organisations.</h1>

            <p>At FLOE we help navigate our clients navigate technical terrain. Unmatched technical execution. We don't believe in short-cuts. We do things right.</p>
            <p>We're a software consultancy with creative DNA. Where high-performance software engineering meets design. A place where high-performance engineering meets thoughtful design. Software with a human touch.</p>
            <p>From inception to creation. Your partner for all things digital</p>
          </article>

        </div>

        <aside className="Home-gallery">
          <div className="Home-gallery-plannning">
            <img src={projectPlanning} alt="Software Project Planning" />
          </div>
          <div className="Home-gallery-wireframing">
            <img src={productWireframing} alt="Software Project Wireframing" />
          </div>
        </aside>


        <aside className="Home-general">
          <h1>We create thoughtful digital products, that not only deliver, but excite the user</h1>          
        </aside>

        <aside className="Home-contact">

          <div className="Home-contact-time">
            Dublin
            <span><Moment tz="Europe/Dublin" format="HH:mm:ss" interval={1000} /></span>
          </div>

          <img src={dublin} className="Home-contact-photo" alt="" />
          

          <div className="Home-contactCard">
            <address>
              <span className="Home-contactCard-name">FLOE</span><br />
              <p>
                24 Fitzwilliam Place<br />
                Dublin, D02 T296<br />
                Ireland
              </p>
            </address>

            <p className="Home-contactCard-telephone">
              <a href="tel:+35315563288">+353 (0)1 556 3288</a><br />
              <span className="Home-contactCard-officeHours">Monday - Friday: 09.00 - 17.00</span>
            </p>

            
              <div className="Home-contact-person">
                <div>
                  <img src={michaelBradley} alt="Michael Bradley - FLOE" width={120} className="Home-contactCard-circle" />
                </div>
                <div className="Home-contact-personDetails">
                  <span className="Home-contact-personDetails-name">Michael Bradley</span><br />
                  <a href="mailto:michael@floe.ie">michael@floe.ie</a>
                </div>
              </div>
            
          </div>

        </aside>

        <footer className="Home-footer">
          <p>Dublin Based Consultancy for all things digital</p>
          <p className="Home-footer-smallPrint">FLOE (FLOE Software Ltd), Company Registration No: 611865. Directors: Michael Bradley & Giustina Mizzoni</p>
        </footer>
      </div>
    )
  }
}

export default Home
