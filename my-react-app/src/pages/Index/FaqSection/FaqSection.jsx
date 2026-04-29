import Question from "@components/ui/containers/Question/Question.jsx";
import styles from './FaqSection.module.css';
import {useState} from 'react'

const FaqSection = () => {


    const [isOpened, setIsOpened] = useState(null);

    const handleToggle = (index) => {
        setIsOpened(isOpened === index ? null : index);
    };

    const faqData = [
        { q: 'Что нужно указать в обращении?', a: 'Много чего полезного и нужного.' },
        { q: 'Как создать обращение?', a: 'На вкладке заявлений, нужно нажать на кнопку +, и заполнить форму.' },
        { q: 'Сколько времени ждать ответ?', a: 'Зависит от количества активных обращений на портале, максимальное время ответа - 5 дней.' },
        { q: 'Как предложить свою идею по улучшению?', a: 'На вкладке обратная связь, с помощью почты или телеграма.' },
        { q: 'Как можно сменить пароль?', a: 'Во вкладке профиля нажать на кнопку сменить пароль.' }
    ];

    return (
        <div className={styles.questions__container}>
            <h2 className={styles.questions__header}>Вопросы - ответы:</h2>
            {faqData.map((item, index) => (
                <Question
                    key={index}
                    questionText={item.q} 
                    answerText={item.a}
                    isActive={isOpened === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    )
}

export default FaqSection