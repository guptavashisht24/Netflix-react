import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="link">
          <div className="logos">
            <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
            <a href="#"><i className="fa fa-instagram fa-2x"></i></a>
            <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
            <a href="#"><i className="fa fa-youtube-play fa-2x"></i></a>
          </div>
          <div className="sub-links">
            <ul>
              <li><a href="#">Audio and Subtitles</a></li>
              <li><a href="#">Audio Description</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </section>
          <p>&copy; 1997-2018 Netflix, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
