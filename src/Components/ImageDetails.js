import React from 'react';
import styles from '../Styles/ImageDetails.module.css';

const ImageDetails = ({ photo, clickTime, onClose }) => {
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.header}>
                <h3>รายละเอียดรูปภาพ</h3>
                <button className={styles.closeButton} onClick={onClose}>X</button>
            </div>
            <div className={styles.details}>
                <p>AlbumId: {photo.albumId}</p>
                <p>Id: {photo.id}</p>
                <p>Title: {photo.title}</p>
                <p>URL: {photo.url}</p>
                <p>ThumbnailURL: {photo.thumbnailUrl}</p>
                <p>Click Time: {clickTime}</p>
            </div>
        </div>
    );
};

export default ImageDetails;
