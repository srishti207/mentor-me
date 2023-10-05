import React,{ useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import UserCard from "../Card/UserCard";
import data from "../../data/sample.json";

function Home(){

    const [users, setUsers] = useState(data.users);
    useEffect(() => {
        fetch('http://localhost:9091/getMentors')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return(
        <ul className="user-card-list">
            {users.map((user, index) => (
                <li key={index} className="user-card-list__item">
                    <UserCard key={index} user={user} />
                </li>
            ))}
        </ul>
    );
}


export default Home;