import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './js_content.module.css';

interface ContentItem {
    _id: string;
    Img: string;
    Judul: string;
    IsiJudul: string;
    Isi: string[];
}

function JsContent() {
    const [content, setContent] = useState<ContentItem[]>([]);
    const [expandedCard, setExpandedCard] = useState<ContentItem | null>(null);

    useEffect(() => {
        axios.get('http://localhost:7272/api/js')
            .then(response => {
                if (Array.isArray(response.data.Content)) {
                    setContent(response.data.Content);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCardClick = (item: ContentItem) => {
        setExpandedCard(item);
    };

    const handleBackClick = () => {
        setExpandedCard(null);
    };

    if (expandedCard) {
        return (
            <div className={styles.singleContentView}>
                <button onClick={handleBackClick}>Back to All Content</button>
                <div className={styles.contentDetail}>
                    <h2>{expandedCard.Judul}</h2>
                    <p>{expandedCard.IsiJudul}</p>
                    <img src={expandedCard.Img} alt={expandedCard.Judul} />
                    {expandedCard.Isi.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.Content}>
            <div className={styles.cardsContainer}>
                {content.map((item) => (
                    <div
                        className={styles.card}
                        key={item._id}
                        onClick={() => handleCardClick(item)}
                    >
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url(${item.Img})` }}
                        ></div>
                        <div className={styles.cardContent}>
                            <h3>{item.Judul}</h3>
                            <p>{item.IsiJudul}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JsContent;