import '@/styles/SocialButtons.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const SocialButtons = () => {
    return (
        <div className="social-links">
            <ul className="social-links__list">
                <li className="social-links__item">
                    <a href="https://github.com/alvag" target="_blank" className="social-links__link">
                        <FaGithub size={ 30 }/>
                    </a>
                </li>

                <li className="social-links__item">
                    <a href="https://www.linkedin.com/in/max-alva-garcia-889b02104/" target="_blank"
                       className="social-links__link">
                        <FaLinkedin size={ 30 }/>
                    </a>
                </li>
            </ul>
        </div>
    );
};
