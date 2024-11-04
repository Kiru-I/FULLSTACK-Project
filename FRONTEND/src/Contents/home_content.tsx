import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './cardstyle.module.css';

interface ContentItem {
    _id: string;
    Img: string;
    Judul: string;
    IsiJudul: string;
    Isi: string[];
}

function PythonContent() {
    const [content, setContent] = useState<ContentItem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:7272/api/home')
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
        navigate('/python'); // Navigate to /python on card click
    };

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

export default PythonContent;
