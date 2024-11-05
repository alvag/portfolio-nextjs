import { FC } from 'react';
import './home.scss';
import { SocialButtons } from '@/components/SocialButtons';
import { DownloadButton } from '@/components/DownloadButton';
import { Footer } from '@/components/Footer/Footer';
import { FaAngular, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

interface HomeProps {
}

const HomePage: FC<HomeProps> = ( {} ) => {
	return (
		<section className="home-page">
			<h1 className="home-page__name">Max Alva García</h1>
			<h2 className="home-page__job">Desarrollador Frontend</h2>

			<div className="home-page__tech-stack">
				<div className="tech-item">
					<FaAngular/>
					<span>Angular</span>
				</div>
				<div className="tech-item">
					<FaReact/>
					<span>React</span>
				</div>
				<div className="tech-item">
					<RiNextjsFill/>
					<span>Next.js</span>
				</div>
				<div className="tech-item">
					<SiTypescript/>
					<span>TypeScript</span>
				</div>
				<div className="tech-item">
					<SiJavascript/>
					<span>JavaScript</span>
				</div>
				<div className="tech-item">
					<FaNodeJs/>
					<span>NodeJs</span>
				</div>
				<div className="tech-item">
					<FaSass/>
					<span>Sass</span>
				</div>
			</div>

			<SocialButtons/>

			<DownloadButton/>

			<Footer/>
		</section>
	);
};

export default HomePage;
