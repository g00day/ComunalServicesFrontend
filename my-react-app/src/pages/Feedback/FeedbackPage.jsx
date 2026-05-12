import classes from "./FeedbackPage.module.css";
import mailIcon from "@icons/mail.svg";
import telegramIcon from "@icons/telegram.svg";
import YellowBtn from "../../components/ui/buttons/YellowBtn/YellowBtn";

const FeedbackPage = () => {
  return (
    <div className={classes.feedbackPage}>
        <div className={classes.desktopWrapper}>
            <div className={classes.desktopLeftWrapper}>
                <div className={classes.topSection}>
                    <h2 className={classes.title}>Есть предложения или вопросы?</h2>
                    <p className={classes.subtitle}>
                    Вы всегда можете обратиться к нам в обратной связи!
                    </p>
                </div>

                <div className={classes.actionSection_desktop}>
                    <div className={classes.buttonContainer}>
                        <YellowBtn pathSvg={mailIcon}>Написать</YellowBtn>
                        <YellowBtn pathSvg={telegramIcon}>Открыть чат</YellowBtn>
                    </div>
                </div>
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
        </div>
      <div className={classes.actionSection_mobile}>
        <div className={classes.buttonContainer}>
          <YellowBtn pathSvg={mailIcon}>Написать</YellowBtn>
          <YellowBtn pathSvg={telegramIcon}>Открыть чат</YellowBtn>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;