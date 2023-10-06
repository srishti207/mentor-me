import React, {useEffect, useState} from "react";
import data from "../../data/previewSample.json";
import PreviewCard from "../Card/PreviewCard";

function Preview(){
    const [preview, setUsers] = useState(data.preview);
    useEffect(() => {
        fetch('http://localhost:9091/getMentor')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers(data)})
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return(
        <div>
            <h1 className="preview_heading">Mentor Details</h1>
            <p className="user-card-list">
                {preview.map((user, index) => (
                    <li key={index} className="user-card-list__ite">
                        <PreviewCard key={index} user={user} />
                    </li>
                ))}
            </p>
        </div>
    );
};

export default Preview;
