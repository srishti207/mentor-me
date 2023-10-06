import React, { useState, useEffect } from "react";
import UserCard from "../Card/UserCard";
import data from "../../data/sample.json";

function Home() {
    const urlParams = new URLSearchParams(window.location.search);
    const skill = urlParams.get('skill');
    const userId = urlParams.get('userId');

    const [users, setUsers] = useState(data.users);
    const [isLoading, setIsLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        setIsLoading(true); // Set loading state to true initially
        fetch(`http://localhost:9091/getMentors?userId=${userId}&skill=${skill}`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false); // Set loading state to false when data is loaded
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading state to false in case of an error
            });
    }, [userId, skill]); // Include userId and skill as dependencies for re-fetching data

    return (
        <div>
            <h2>List of Mentors</h2>
            {isLoading ? ( // Show loading message when isLoading is true
                <p>Your request is being processed...</p>
            ) : (
                <ul className="user-card-list">
                    {users.map((user, index) => (
                        <li key={index} className="user-card-list__item">
                            <UserCard key={index} user={user} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
