import '@/styles/DownloadButton.scss';

export const DownloadButton = () => {
    return (
        <div className="download-btn">
            <a href="/files/cv_Max_Alva.pdf" target="_blank" className="download-btn__link">
                Descargar CV
            </a>
        </div>
    );
};
