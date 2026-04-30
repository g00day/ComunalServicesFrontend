import classes from "./Footer.module.css";
import telegramIcon from "@icons/telegram.svg";
import mailIcon from "@icons/mail.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          
          <div className={classes.contactsSide}>
            <h3 className={classes.title}>Обратная связь:</h3>
            
            <div className={classes.contactRow}>
              <img src={telegramIcon} alt="Telegram" className={classes.icon} />
              <span className={classes.label}>Telegram:</span>
              <a href="https://t.me" className={classes.link}>@anekdot_bot</a>
            </div>

            <div className={classes.contactRow}>
              <img src={mailIcon} alt="Mail" className={classes.icon} />
              <span className={classes.label}>Эл. почта:</span>
              <a href="mailto:help-jkx@mail.ru" className={classes.link}>help-jkx@mail.ru</a>
            </div>
          </div>

          <div className={classes.faqSide}>
            <a href="/faq" className={classes.faq}>FAQ</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;