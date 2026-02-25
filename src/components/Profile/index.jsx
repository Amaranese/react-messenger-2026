import React from 'react';
import Social from "../Social/Social";
import Media from "../Media/Media";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile(props) {

    return (
        <div className='content-profile'>
            <div className="profile-container">
                <ProfileInfo />
                <Social />
                <Media />
            </div>
        </div>
    );
}

export default Profile;