import React, { useEffect } from 'react';
import Avatar from "@mui/material/Avatar";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideocamIcon from "@mui/icons-material/Videocam";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/actions';

const ProfileInfo = () => {
  const profile = useSelector((state) => state.application.items)
  const loading = useSelector(state => state.application.loading)
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchProfile())
  }, [])

    return (
        <div className="profile-info">
            <Avatar className='profile-avatar' alt="Remy Sharp" src={profile.picture}  />
            <div className='profile-names'>
              {loading ?
                <>
                  <h3 className='profile-name'> {profile.fullname} </h3>
                  <p className='profile-nick-name'>@{profile.username}</p>
                </>
                : <p>Loading</p>
              }

            </div>
            <ul className='profile-icons-list'>
                <li className='icons-list-item'><PhoneEnabledIcon/></li>
                <li className='icons-list-item'><VideocamIcon/></li>
                <li className='icons-list-item'><MailIcon/></li>
            </ul>
        </div>
    );
};

export default ProfileInfo;