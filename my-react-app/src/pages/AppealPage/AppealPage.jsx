import React from 'react';
import classes from "./AppealPage.module.css";
import TaskStatus from '@components/ui/badges/TaskStatus/TaskStatus';


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
      </div>

      <div className={classes.chatBox}>
        <div className={classes.chatMessages}>
          <div className={`${classes.message} ${classes.myMessage}`}>
            Здравствуйте! Опишите, пожалуйста, Вашу проблему.
          </div>

          <div className={`${classes.message} ${classes.otherMessage}`}>
            <span className={classes.msgHeader}>Василий Бодров (11.05.25 23:44):</span>
            Моя мама забрала мой компьютер - помогите!!!!!!!
          </div>

          <div className={`${classes.message} ${classes.myMessage}`}>
            <span className={classes.msgHeader}>Вы (12.05.25 12:12):</span>
            Нам вас очень жалко, но ничем помочь не можем.
          </div>

          <div className={`${classes.message} ${classes.otherMessage}`}>
            <span className={classes.msgHeader}>Василий Бодров (12.05.25 13:23):</span>
            Прощайте, больше здесь меня не будет ((((
          </div>
        </div>

        <div className={classes.inputWrapper}>
          <input type="text" placeholder="Напишите что-то..." />
          <button className={classes.iconBtn}>
            <img src={attachmentIcon} />
          </button>
          <button className={classes.iconBtn}>
            <img src={topArrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppealPage;