import React from 'react';
import classes from "./ProfilePage.module.css";

import ProfileMockPic from "@p/mock/ProfileMockPic.png";
import mailIcon from "@icons/mail.svg";
import groupIcon from "@icons/group.svg";
import locationIcon from "@icons/location.svg";
import closedIcn from "@icons/closed.svg";
import inWorkIcn from "@icons/in_work.svg";
import logoutIcn from "@icons/logout.svg";
import penIcn from "@icons/pen_8x8.svg";
import telegramIcn from "@icons/telegram.svg";
import YellowBtn from '../../components/ui/buttons/YellowBtn/YellowBtn';

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
          <img src={locationIcon} className={classes.charIcon} alt="group" />
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
              <img src={closedIcn} alt="Закрыто" />
              Закрыто заявок: 12
            </div>
            <div className={classes.statItem}>
              <img src={inWorkIcn} alt="В работе" />
              Заявок в работе: 0
            </div>
          </div>
        </div>

        <div className={classes.buttonGroup}>
          <YellowBtn pathSvg={penIcn}>Сменить пароль</YellowBtn>
          <YellowBtn pathSvg={telegramIcn}>Подключить</YellowBtn>
          <YellowBtn pathSvg={logoutIcn}>Выйти</YellowBtn>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;