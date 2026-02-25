import React, { useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/actions';

const Social = () => {
    const profile = useSelector((state) => state.application.items)

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProfile())
    }, [])


    return (
        <div className="social">
            <h3 className='social-title'>Social</h3>
            <ul className='social-list'>
                <li className='social-list-item'>
                    <InstagramIcon />
                    <span>{profile.username}</span>
                </li>
                <li className='social-list-item'>
                    <TwitterIcon />
                    <span>{profile.username}</span>
                </li>
                <li className='social-list-item'>
                    <FacebookIcon />
                    <span>{profile.username}</span>
                </li>
            </ul>
        </div>
    );
};

export default Social;