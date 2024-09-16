// import ImageGallery from '../Components/ImageGallery'

// const ImageGalleryPage = () => {
//     return (
//         <ImageGallery />
//     )
// }

// export default ImageGalleryPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from '../Components/ImageCard';
import ImageDetails from '../Components/ImageDetails';
import styles from './../Styles/ImageGalleryPage.module.css';

const ImageGalleryPage = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [clickTime, setClickTime] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                setPhotos(response.data.slice(0, 6)); // แสดงรูปภาพแค่ 6 รูป
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleImageClick = (photo) => {
        setSelectedPhoto(photo);
        setClickTime(new Date().toLocaleString());
    };

    const handleRemoveImage = (id) => {
        setPhotos(photos.filter(photo => photo.id !== id));
    };

    const handleCloseDetails = () => {
        setSelectedPhoto(null);
        setClickTime(null);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.galleryContainer}>
            {selectedPhoto && (
                <ImageDetails
                    photo={selectedPhoto}
                    clickTime={clickTime}
                    onClose={handleCloseDetails}
                />
            )}
            <div className={styles.photoGrid}>
                {photos.map(photo => (
                    <ImageCard
                        key={photo.id}
                        photo={photo}
                        onClick={handleImageClick}
                        onRemove={handleRemoveImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGalleryPage;
