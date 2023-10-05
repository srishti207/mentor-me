import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="user-card-container">
            <div className="user-card">
                <div className="user-details">
                    <h2 className='userCard_name'>{user.name}</h2>
                    <p className='userCard_experience'>Experience: {user.exp} years</p>
                    <p className='userCard_skills'>Skills: {user.skills.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
