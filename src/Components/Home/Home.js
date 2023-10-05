import React,{ useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import UserCard from "../Card/UserCard";

function Home(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9091/getMentors')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return(
        <div className="user-list">
            {users.map((user, index) => (
                <div key={index} className="user-card-wrapper">
                <UserCard key={index} user={user} />
                </div>
            ))}
        </div>
    );
}


export default Home;