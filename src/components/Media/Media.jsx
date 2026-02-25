import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Media = () => {
    return (
        <div className='media'>
            <h3 className='media-title'>Media</h3>
            <ul className="media-list">
                <li className='media-list-item'>
                    <InsertDriveFileIcon className='media-icon'/>
                    <span>desktop-chat.pdf</span>
                </li>
            </ul>
        </div>
    );
};

export default Media;