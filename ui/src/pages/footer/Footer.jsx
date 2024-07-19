import React from 'react'
import './footer.css'
import goToTop from '../../common-functions/goToTop'

function Footer() {

  return (
    <div className='container' id='footer'>
      <h6 className="footer__title">2024.&copy; Made by <span style={{color: 'rgb(255, 115, 0)'}}>Agustín De Sousa Mariano</span>.</h6>

      <button className="footer__icon_container" onClick={goToTop}>
        <i class="fa-solid fa-arrow-up footer__icon"></i>
      </button>
    </div>
  )
}

export default Footer