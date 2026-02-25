import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from '../../redux/actions';
import { useParams } from 'react-router-dom';


function Contact(props) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: -1,
                left: -1,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    const _id = useParams().id;
    const contacts = useSelector(state => state.contacts.items)
    const loading = useSelector(state => state.contacts.loading)
    const myId = useSelector((state) => state.application.items._id)

    const messagClick = () =>{

    }

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchContact())
    }, [])

    return (
        <div className='content-dialog'>
            <div className="dialog-search">
                <input type="search" placeholder='Поиск контакта'/>
            </div>
            {loading ?
              <p>Loading</p>
              :
              <div className="dialog-contacts" onClick={messagClick}>
                  {
                      contacts.map((contact, key) => {
                          return(
                            <div key={key} className="dialog-contacts__item contact">
                                <div className="contact-icon">
                                    <StyledBadge
                                      overlap="circular"
                                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                      variant={contact.online ? 'dot' : ' '}
                                    >
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </StyledBadge>
                                </div>
                                <div className="contact-text">
                                    <div className="contact-text__name">
                                        <p>{contact.fullname}</p>
                                    </div>
                                    <div className="contact-text__message">
                                        <span>{contact.lastMessage.content}</span>
                                    </div>
                                </div>
                                <div className="contact-time">
                                    <span>9:00</span>
                                </div>
                            </div>
                          )
                      })
                  }
              </div>
            }

        </div>
    );
}

export default Contact;