import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (<div className="footer">
       
        <div className="footer-inner">
            <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-use">Terms Of Use</Link>
                <Link to="/privacy-policy">Disclaimer</Link>
            </div>

            <div className="footer-socials">
                <h3>Follow Us On:</h3>
                <a href="https://www.facebook.com/evolvsmart" target="_blank" rel="noreferrer"><FacebookIcon className="footer-socials-icon" /></a>
                <a href="https://www.instagram.com/evolvsmart/" target="_blank" rel="noreferrer"><InstagramIcon className="footer-socials-icon" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            Focus50 © 2022 All Right Reserved
        </div>

    </div>)
}

export default Footer;
