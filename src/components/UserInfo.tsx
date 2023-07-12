import '@/styles/UserInfo.scss';
import Image from 'next/image';

export const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="user-info__container-image">
                <Image className="user-info__image"
                       src="/images/avatar.png"
                       alt="avatar" fill/>
            </div>

            <h2 className="user-info__name">Max Alva</h2>
            <h4 className="user-info__job">Desarrollador Frontend</h4>
        </div>
    );
};
