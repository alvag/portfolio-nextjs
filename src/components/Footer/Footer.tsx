import '@/styles/Footer.scss';
import { FaHeart } from 'react-icons/fa6';

export const Footer = () => {
    return (
        <footer className="footer">
            Hecho con <FaHeart/> usando <a href="https://nextjs.org/"
                                           rel="noreferrer"
                                           target="_blank">
            NEXT.js!
        </a>
        </footer>
    );
};
