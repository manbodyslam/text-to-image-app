import React from 'react';

interface ImageResultProps {
    imageUrl: string;
    loading: boolean;
}

const ImageResult: React.FC<ImageResultProps> = ({ imageUrl, loading }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="image-result">
            {imageUrl ? <img src={imageUrl} alt="Generated result" /> : <p>No image generated yet.</p>}
        </div>
    );
};

export default ImageResult;