import { FC } from 'react';

interface HomeProps {
}

const HomePage: FC<HomeProps> = ( {} ) => {
    return (
        <section className="content__page">
            <h1 className="page__name">Max Alva</h1>
            <h2 className="page__job">Desarrollador Frontend</h2>
        </section>
    );
};

export default HomePage;
