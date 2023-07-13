import { FC } from 'react';
import './home.scss';
import { SocialButtons } from '@/components/SocialButtons';
import { DownloadButton } from '@/components/DownloadButton';
import { Footer } from '@/components/Footer/Footer';

interface HomeProps {
}

const HomePage: FC<HomeProps> = ( {} ) => {
    return (
        <section className="home-page">
            <h1 className="home-page__name">Max Alva García</h1>
            <h2 className="home-page__job">Desarrollador Frontend</h2>


            <SocialButtons/>

            <DownloadButton/>

            <Footer/>
        </section>
    );
};

export default HomePage;
