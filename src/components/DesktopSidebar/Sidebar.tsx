import './Sidebar.scss';
import { Menu } from '@/components/Menu/Menu';
import { SocialButtons } from '@/components/SocialButtons';
import { DownloadButton } from '@/components/DownloadButton';
import { Footer } from '@/components/Footer/Footer';
import { UserInfo } from '@/components/UserInfo';

export const Sidebar = () => {
    return (
        <aside className="aside-wrapper">
            <section className="aside-wrapper__section">
                <UserInfo/>

                <Menu/>

                <SocialButtons/>

                <DownloadButton/>

                <Footer/>
            </section>
        </aside>
    );
};
