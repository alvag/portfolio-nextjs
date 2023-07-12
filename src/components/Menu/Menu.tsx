import './Menu.scss';
import Link from 'next/link';
import { FaBriefcase, FaEnvelope, FaGraduationCap, FaHouse, FaUser } from 'react-icons/fa6';

export const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__option">
                    <Link href="/" prefetch className="menu__link">
                        <FaHouse className="menu__icon"/>
                        <span className="menu__overlay">Home</span>
                    </Link>
                </li>
                <li className="menu__option">
                    <Link href="/sobre-mi" prefetch className="menu__link">
                        <FaUser className="menu__icon"/>
                        <span className="menu__overlay">Sobre mi</span>
                    </Link>
                </li>
                <li className="menu__option">
                    <Link href="/estudios" prefetch className="menu__link">
                        <FaGraduationCap className="menu__icon"/>
                        <span className="menu__overlay">Estudios</span>
                    </Link>
                </li>
                <li className="menu__option">
                    <Link href="/portafolio" prefetch className="menu__link">
                        <FaBriefcase className="menu__icon"/>
                        <span className="menu__overlay">Portafolio</span>
                    </Link>
                </li>
                <li className="menu__option">
                    <Link href="/contacto" prefetch className="menu__link">
                        <FaEnvelope className="menu__icon"/>
                        <span className="menu__overlay">Contacto</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
