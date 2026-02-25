import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from "@mui/material/Avatar";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMesseges } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function Messages(props) {
    const dispatch = useDispatch()
    const _id = useParams().id;

    const myId = useSelector((state) => state.application.items._id)
    const messages = useSelector(state => state.messages.items)
    const loading = useSelector(state => state.messages.loading)

    // console.log(myId)

    useEffect(() => {
        if(!_id){
            dispatch(fetchMesseges(myId, _id))
        }
    }, [dispatch, _id, myId])

    if(!_id){
        return(
          <div>
              Выберите чат, чтобы начать переписку
          </div>
        )
    }

    return (
        <div className='messages'>
            <div className="messages-header">
                <SearchIcon/>
                <div className="messages-header__name">
                    Кудузов Альви
                </div>
                <SettingsIcon/>
            </div>
            {
                messages.map(function(item, key){
                    return(
                      <div className="messages-content">
                          <div className="chat-left">
                              <div className="messages-content__received">
                                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                  <div className="messages-content__received-text">
                                      <p>{item.content}</p>
                                      <span>13:00</span>
                                  </div>
                              </div>
                          </div>
                          <div className="messages-content__notification">
                              Пропущенный вызов
                          </div>
                          <div className="chat-right">
                              <div className='chat-right__items'>
                                  <div className="messages-content__sent">
                                      <p>{item.content}</p>
                                      <span>13:00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                    )
                })
            }

            <div className="messages-send">
                <input type="text" placeholder='Напишиете сообщение...'/>
                <div className="messages-send__icons">
                    <AttachFileIcon/>
                    <SendIcon/>
                </div>
            </div>
        </div>
    );
}

export default Messages;