import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-contact">
                <h3 className='font-glacial-r'>DIKSUCHI DESIGN STUDIO</h3>
                <h4 className='font-glacial-r'>FLAT NO: 2B, KLSR TOWERS <br />
                    MADHAPUR, TELANGANA,<br />
                    PIN CODE: 500081.</h4>
                <Link className='font-glacial-r' to={'tel:+919966662421'}>+91 99666 62421</Link>
                <Link className='font-glacial-r' to={'mailto:diksuchidesignstudio@gmail.com'}>diksuchidesignstudio@gmail.com</Link>
            </div>
            <div className="footer-logo">
                <div className="footer-logo-image">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="footer-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.88294937459295!2d78.39200811504449!3d17.453625416039724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9130c2cabfdf%3A0x802feb0541bebaec!2sDIKSUCHI%20DESIGN%20STUDIO!5e0!3m2!1sen!2sin!4v1701356426420!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    )
}

export default Footer