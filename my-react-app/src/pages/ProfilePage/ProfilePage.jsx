import React from 'react';
import classes from "./ProfilePage.module.css";

import ProfileMockPic from "@p/mock/ProfileMockPic.png";
import mailIcon from "@icons/mail.svg";
import groupIcon from "@icons/group.svg";
import locationIcon from "@icons/location.svg";

const ProfilePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profileHeader}>
        <img src={ProfileMockPic} alt="Avatar" className={classes.avatar} />
        <h2 className={classes.name}>
          Пугачев<br />Роман<br />Никитич
        </h2>
      </div>

      <div className={classes.card}>
        <div className={classes.infoRow}>
          <img src={groupIcon} className={classes.charIcon} alt="group" />
          <span>ГБУ Жилищник Донского района</span>
        </div>
        <div className={classes.infoRow}>
          <img src={groupIcon} className={classes.charIcon} alt="group" />
          <span>Инженер ПТО</span>
        </div>
        <div className={classes.lastSeen}>
          <span style={{ color: '#eb4e4e', marginRight: '4px' }}>•</span> 
          Последний вход: 12.02.2025 12:23:11
        </div>
      </div>

      <div className={classes.mainGrid}>
        <div className={classes.leftColumn}>
          <div className={`${classes.card} ${classes.emailBox}`}>
            <span className={classes.emailText}>roma_tech@mail.ru</span>
            <img src={mailIcon} className={classes.charIcon} alt="mail" />
          </div>

          <div className={`${classes.card} ${classes.statsBox}`}>
            <h3>Статистика:</h3>
            <div className={classes.statItem}>
              <svg className={classes.icon} viewBox="0 0 14 10" fill="none" stroke="white" strokeWidth="2">
                <path d="M1 5L5 9L13 1" />
              </svg>
              Закрыто заявок: 12
            </div>
            <div className={classes.statItem}>
              <svg className={classes.icon} viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="2" width="10" height="10" rx="1" />
                <path d="M4 5H10M4 7H10M4 9H7" />
              </svg>
              Заявок в работе: 0
            </div>
          </div>
        </div>

        <div className={classes.buttonGroup}>
          <button className={classes.mainButton}>
            <svg className={classes.icon} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            Сменить пароль
          </button>
          <button className={classes.mainButton}>
            <svg className={classes.icon} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Подключить
          </button>
          <button className={`${classes.mainButton} ${classes.btnExit}`}>
            <svg className={classes.icon} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;