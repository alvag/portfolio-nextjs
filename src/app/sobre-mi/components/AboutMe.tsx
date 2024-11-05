import '@/styles/AboutMe.scss';

export const AboutMe = () => {
	const experience = new Date().getFullYear() - 2016;

	return (
		<section className="about-me">
			<article className="about-me__bio">
				<p className="about-me__description">
					Con una trayectoria de {experience} años en tecnología, he trabajado en startups, empresas de tecnología y banca, especializándome en desarrollo frontend con Angular, React y Next.js. Me gusta construir aplicaciones web escalables
					y mantenibles, y optimizar el código para garantizar rendimiento y eficiencia. También tengo experiencia implementando pruebas automatizadas y participando en revisiones de código para mantener altos estándares de calidad. Destaco
					en liderazgo y colaboración en equipo, con habilidades en comunicación y resolución de problemas. Mi motivación por la innovación y la excelencia me lleva a contribuir al crecimiento y éxito de los proyectos en los que participo.
				</p>
			</article>
		</section>
	);
};
