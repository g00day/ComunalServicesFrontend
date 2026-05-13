import React from 'react';
import classes from "./AppealPage.module.css";
import TaskStatus from '@components/ui/badges/TaskStatus/TaskStatus';
import Message from '@components/ui/containers/Message/Message'; 
import {Link} from 'react-router-dom'

import attachmentIcon from "@icons/attachment.svg";
import topArrowIcon from "@icons/topArrow.svg";

const AppealPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ticketHeader}>
        <div className={classes.titleRow}>
          <h1>Все сломалось</h1>
          <TaskStatus status="close"/>
        </div>
        <div className={classes.metaInfo}>
          Создано: 12:11 11.05<br />
          Отправитель: aufbandit_2012@mail.ru
        </div>
        <div className={classes.contentSection}>
          <h3>Содержание:</h3>
          <p>Помогите.</p>
        </div>
        <div className={classes.closeAppeal}>
            <Link to="/appeals" className={classes.link__route}>Выйти из обращения</Link>
        </div>
      </div>

      <div className={classes.chatBox}>
        <div className={classes.chatMessages}>
          
          <Message 
            isUser={false} 
            first_name="" 
            last_name="Вы" 
            formattedDate="11.05.25 12:00" 
            mess="Здравствуйте! Опишите, пожалуйста, Вашу проблему." 
          />

          <Message 
            isUser={true} 
            first_name="Бодров" 
            last_name="Василий" 
            formattedDate="11.05.25 23:44" 
            mess="Моя мама забрала мой компьютер - помогите!!!!!!!" 
          />

          <Message 
            isUser={false} 
            first_name="" 
            last_name="Вы" 
            formattedDate="12.05.25 12:12" 
            mess="Нам вас очень жалко, но ничем помочь не можем." 
          />

          <Message 
            isUser={true} 
            first_name="Бодров" 
            last_name="Василий" 
            formattedDate="12.05.25 13:23" 
            mess="Прощайте, больше здесь меня не будет ((((" 
          />

        </div>

        <div className={classes.inputWrapper}>
          <input type="text" placeholder="Напишите что-то..." />
          <button className={classes.iconBtn}>
            <img src={attachmentIcon} alt="Прикрепить" />
          </button>
          <button className={classes.iconBtn}>
            <img src={topArrowIcon} alt="Отправить" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppealPage;