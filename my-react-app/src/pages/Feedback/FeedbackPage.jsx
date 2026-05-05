import classes from "./FeedbackPage.module.css";
import mailIcon from "@icons/mail.svg";
import telegramIcon from "@icons/telegram.svg";

const FeedbackPage = () => {
  return (
    <div className={classes.feedbackPage}>
      <div className={classes.topSection}>
        <h2 className={classes.title}>Есть предложения или вопросы?</h2>
        <p className={classes.subtitle}>
          Вы всегда можете обратиться к нам в обратной связи!
        </p>
      </div>

      <div className={classes.bottomSection}>
        <h3 className={classes.sectionTitle}>Советы по оформлению:</h3>
        <div className={classes.tipsList}>
          <div className={classes.tipCard}>
            <span className={classes.tipNumber}>1</span>
            <div className={classes.tipContent}>
              <p className={classes.tipText}>Пишите подробно и по теме (без абстрактных проблем или пожеланий)</p>
            </div>
          </div>
          <div className={classes.tipCard}>
            <span className={classes.tipNumber}>2</span>
            <div className={classes.tipContent}>
              <p className={classes.tipText}>Прикрепляйте фотографии, файлы и все, что может помочь вашей идее получить реализацию. </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.actionSection}>
        <div className={classes.buttonContainer}>
          <button className={classes.mainButton}>
            <img src={mailIcon} alt="" className={classes.icon} />
            Написать
          </button>
          <button className={classes.mainButton}>
            <img src={telegramIcon} alt="" className={classes.icon} />
            Открыть чат
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
