import React from "react";
import './PreviewCard.css'

function PreviewCard({ user }){
    return(
        <div className="preview-card-container">
            <div className="preview-card">
                <h2 className='user__name'>{user.name}</h2>
                <div className='user-meta'>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/bag.png" alt="Bag Icon" title="Experience" />
                        <span>{user.exp}</span>
                    </div>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/wallet.png" alt="Wallet Icon" title="Designation" />
                        <span>{user.companyDetails.designation} At {user.comapanyType}</span>
                    </div>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/location.png" alt="Pin Icon" title="Location" />
                        <span>{user.location}</span>
                    </div>
                {/*    <div className='user-meta__row'>*/}
                {/*        <button*/}
                {/*            type='button'*/}
                {/*            className='user_card_select'*/}
                {/*            onClick={handleSelectUser}*/}
                {/*        >*/}
                {/*            Select*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            type='button'*/}
                {/*            className='user_card_preview'*/}
                {/*            onClick={handleSelectUser}*/}
                {/*        >*/}
                {/*            Select*/}
                {/*        </button>*/}
                {/*    </div>*/}
                </div>
                <div className='user-details'>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Current</div>
                        <div className='user-details__value'>{user.companyDetails.orgn}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Education</div>
                        <div className='user-details__value'>{user.education}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Strong skills</div>
                        <div className='user-details__value'>{user.skills.primary.join(' ')}</div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Also knows</div>
                        <div className='user-details__value'>{user.skills.secondary.join(' ')}</div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PreviewCard;