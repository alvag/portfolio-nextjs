import '@/styles/SocialButtons.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const SocialButtons = () => {
    return (
        <div className="social-links">
            <ul className="social-links__list">
                <li className="social-links__item">
                    <a href="#" className="social-links__link">
                        <FaGithub size={ 25 }/>
                    </a>
                </li>

                <li className="social-links__item">
                    <a href="#" className="social-links__link">
                        <FaLinkedin size={ 25 }/>
                    </a>
                </li>
            </ul>
        </div>
    );
};
