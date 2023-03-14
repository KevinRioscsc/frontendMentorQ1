import React from 'react'
import img from '../images/image-qr-code.png'
import './style.css'


const QR = () => {
  return (
    <div>
        <div className="mainCard">
           <img src={img} className='qrCard' alt="photo" />
            <div className="words">
                <p className="title"> Improve your front-end skills by building projects</p>
                <p className="descr">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
  )
}

export default QR