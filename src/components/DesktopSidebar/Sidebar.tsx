import './Sidebar.scss';
import Image from 'next/image';
import {
    FaBriefcase,
    FaEnvelope,
    FaGithub,
    FaGraduationCap, FaHeart,
    FaHouse,
    FaLinkedin,
    FaUser
} from 'react-icons/fa6';
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <aside className="aside-wrapper">
            <section className="aside-wrapper__user-info">
                <div className="user-info__general">
                    <div className="user-info__container-image">
                        <Image className="user-info__image"
                               src="/images/avatar.png"
                               alt="avatar" width={ 80 } height={ 80 }/>
                    </div>

                    <h2 className="user-info__name">Max Alva</h2>
                    <h4 className="user-info__job">Desarrollador Frontend</h4>
                </div>

                <nav className="layout__menu">
                    <ul className="menu__list">
                        <li className="menu__option">
                            <Link href="/" prefetch className="menu__link">
                                <FaHouse/>
                                <span className="menu__overlay">Home</span>
                            </Link>
                        </li>
                        <li className="menu__option">
                            <Link href="/sobre-mi" prefetch className="menu__link">
                                <FaUser/>
                                <span className="menu__overlay">Sobre mi</span>
                            </Link>
                        </li>
                        <li className="menu__option">
                            <Link href="/estudios" prefetch className="menu__link">
                                <FaGraduationCap/>
                                <span className="menu__overlay">Estudios</span>
                            </Link>
                        </li>
                        <li className="menu__option">
                            <Link href="/portafolio" prefetch className="menu__link">
                                <FaBriefcase/>
                                <span className="menu__overlay">Portafolio</span>
                            </Link>
                        </li>
                        <li className="menu__option">
                            <Link href="/contacto" prefetch className="menu__link">
                                <FaEnvelope/>
                                <span className="menu__overlay">Contacto</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="user-info__user-links">
                    <ul className="user-links__social">
                        <li className="social__option">
                            <a href="#" className="social__link">
                                <FaGithub/>
                            </a>
                        </li>

                        <li className="social__option">
                            <a href="#" className="social__link">
                                <FaLinkedin/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="user-info__buttons">
                    <a href="#" className="user-info__btn">
                        Descargar CV
                    </a>
                </div>

                <footer className="user-info__footer">
                    Hecho con <FaHeart/> usando
                    <a href="https://nextjs.org/"
                       rel="noreferrer"
                       target="_blank">
                        NEXT.js
                    </a>
                </footer>
            </section>
        </aside>
    );
};
