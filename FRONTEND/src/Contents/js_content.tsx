import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ContentItem {
    _id: string;
    Img: string;
    Judul: string;
    IsiJudul: string;
    Isi: string[];
}

function JsContent() {
    const [content, setContent] = useState<ContentItem[]>([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:7272/api/js') // Replace with your actual endpoint
            .then(response => {
                if (Array.isArray(response.data.Content)) {
                    setContent(response.data.Content); // Set state if Content is an array
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="Content">
                <div className="cards-container">
                    {content.map((item) => (
                        <div className="card" key={item._id}>
                            <div
                                className="card-image"
                                style={{ backgroundImage: `url(${item.Img})` }}
                            ></div>
                            <div className="card-content">
                                <h3>{item.Judul}</h3>
                                <p>{item.IsiJudul}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default JsContent