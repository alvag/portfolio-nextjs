import './Sidebar.scss';
import Image from 'next/image';
import { Menu } from '@/components/Menu/Menu';
import { SocialButtons } from '@/components/SocialButtons';
import { DownloadButton } from '@/components/DownloadButton';
import { Footer } from '@/components/Footer/Footer';

export const Sidebar = () => {
    return (
        <aside className="aside-wrapper">
            <section className="user-info">
                <div className="user-info__general">
                    <div className="user-info__container-image">
                        <Image className="user-info__image"
                               src="/images/avatar.png"
                               alt="avatar" fill/>
                    </div>

                    <h2 className="user-info__name">Max Alva</h2>
                    <h4 className="user-info__job">Desarrollador Frontend</h4>
                </div>

                <Menu/>

                <SocialButtons/>

                <DownloadButton/>

                <Footer/>
            </section>
        </aside>
    );
};
