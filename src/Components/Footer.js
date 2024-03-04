import React from 'react';
import FooterLogo from '../images/Asset 4@3x.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-image-holder">
                <img src={FooterLogo} alt="Mangata & Gallo footer logo" />
            </div>
            <div className="footer-text-holder">
                <p>Copyright Mangata & Gallo</p>
            </div>
        </footer>
    )
}
