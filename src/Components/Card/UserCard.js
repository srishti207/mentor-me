import React from 'react';
import './UserCard.css'

const UserCard = ({ user }) => {
    return (
        <div className="user-card-container">
            <div className="user-card">
                <h2 className='user__name'>{user.name}</h2>
                <div className='user-meta'>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/bag.png" alt="Bag Icon" title="Experience" />
                        <span>{user.experience}</span>
                    </div>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/wallet.png" alt="Wallet Icon" title="CTC" />
                        <span>{user.ctc.current}</span>
                    </div>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/location.png" alt="Pin Icon" title="Location" />
                        <span>{user.location.current}</span>
                    </div>
                </div>
                <div className='user-details'>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Current</div>
                        <div className='user-details__value'>{user.company}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Education</div>
                        <div className='user-details__value'>{user.education}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Pref. Locations</div>
                        <div className='user-details__value'>{user.location.preferred.join(' ')}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Key skills</div>
                        <div className='user-details__value'>{user.skills.primary.join(' ')}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>May i also know</div>
                        <div className='user-details__value'>{user.skills.secondary}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
