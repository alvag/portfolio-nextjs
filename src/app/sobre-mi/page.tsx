import { FC } from 'react';
import './about.scss';
import { AboutMe } from '@/app/sobre-mi/components/AboutMe';
import { Footer } from '@/components/Footer/Footer';

interface AboutProps {
}

const AboutPage: FC<AboutProps> = ( {} ) => {
    return (
        <div className="about-page">
            <header className="about-page__header">
                <h2 className="about-page__title">Sobre <span>mí</span></h2>
            </header>

            <AboutMe/>

            <Footer/>
        </div>
    );
};

export default AboutPage;
