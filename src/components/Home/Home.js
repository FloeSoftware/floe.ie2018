import React, { Component } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { INTERCOM_APP_ID } from '../../constants'

import './Home.scss'
import Logo from './floe-logo.svg'
import projectPlanning from './floe-software-project-planning.jpg'
import productWireframing from './floe-software-wireframing.jpg'
import dublinSkyline from './dublin.jpg'
import michaelBradley from './michael-bradley.jpg'

class Home extends Component {
  componentDidMount() {
    window.Intercom("boot", {
      app_id: INTERCOM_APP_ID
    })
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-viewPort">

          <header className="Home-header">
            <div className="Home-headerUpper">
              <div className="Home-headerUpper-logo">
                <img src={Logo} alt="FLOE Software Logo" />
              </div>
              <div className="Home-headerUpper-phone">
                <a href="tel:+35315563288">+353 (0)1 556 3288</a>
              </div>
            </div>

            <div className="Home-headerLower">
              Your partner for all things software
            </div>
          </header>

          <article className="Home-highLevel">
            <h1>Exceptional digital products for tomorrow's businesses and organisations.</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque tortor, elementum ut venenatis at, rhoncus eu sapien. Praesent ut consequat ligula.</p>
            <p>Vestibulum eget gravida libero, at tristique elit. Aliquam sagittis, lacus quis sodales dignissim, turpis urna efficitur erat, eu ultricies dolor sapien vel lacus. Praesent velit ex, porttitor sed sapien scelerisque</p>
            <p>rutrum gravida ex. Vestibulum porta consequat convallis. Curabitur id</p>
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

          <img src={dublinSkyline} className="Home-contact-photo" alt="Dublin Grand Canal" />

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
                <img src={michaelBradley} alt="Michael Bradley - FLOE" className="Home-contactCard-circle" />
              </div>
              <div className="Home-contact-personDetails">
                <span className="Home-contact-personDetails-name">Michael Bradley</span><br />
                <a href="mailto:michael@floe.ie">michael@floe.ie</a>
              </div>
            </div>

          </div>
        </aside>

        <footer className="Home-footer">
          <p>FLOE - Your partner for all things software</p>
          <p className="Home-footer-smallPrint">FLOE (FLOE Software Ltd), Company Registration No: 611865. Directors: Michael Bradley & Giustina Mizzoni</p>
        </footer>
      </div>
    )
  }
}

export default Home
