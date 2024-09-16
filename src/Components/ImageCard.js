import React from 'react';
import styles from '../Styles/ImageCard.module.css';

const ImageCard = ({ photo, onClick, onRemove }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    onClick={() => onClick(photo)}
                    className={styles.image}
                />
                <button className={styles.removeButton} onClick={() => onRemove(photo.id)}>X</button>
            </div>
            <p className={styles.title} onClick={() => onClick(photo)}>{photo.title}</p>
        </div>
    );
};

export default ImageCard;
