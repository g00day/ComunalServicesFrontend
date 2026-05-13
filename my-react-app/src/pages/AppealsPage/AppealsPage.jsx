import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassBtn from '@components/ui/buttons/GlassBtn/GlassBtn';
import styles from "./AppealsPage.module.css";

import Appeal from '@/components/ui/containers/Appeal/Appeal';

const AppealsPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const appeals = [
        { id: 1, title: "Очень длинное название котор...", status: "created", description: "Разнообразный и богатый опыт...", date: "12:13 02.02" },
        { id: 2, title: "Очень длинное название котор...", status: "in_work", description: "Разнообразный и богатый опыт...", date: "12:13 02.02", isNew: true, comments: 15 },
        { id: 3, title: "Все сломалось", status: "close", description: "Помогите.", date: "12:11 11.05" }
    ];

    return (
        <div className={styles.appealsPage__container}>
            <div className={`${styles.appealsPage__list} ${isFormOpen ? styles.blurred : ''}`}>
                {appeals.map((item) => (
                    <Appeal 
                        key={item.id}
                        hasNewMess={item.isNew} 
                        title={item.title} 
                        text={item.description} 
                        createTime={item.date} 
                        countNewMess={item.comments} 
                        status={item.status}
                    />
                ))}
            </div>

            <AnimatePresence>
                {!isFormOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className={styles.appealsPage__fabContainer}
                    >
                    <GlassBtn typeOfBtn="add" onClick={() => setIsFormOpen(true)} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isFormOpen && (
                    <>
                        <motion.div 
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFormOpen(false)}
                        />
                        
                        <motion.div 
                            className={styles.appealsPage__formWrapper}
                            initial={{ y: "100%" }} 
                            animate={{ y: 0 }}      
                            exit={{ y: "100%" }}    
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className={styles.appealsPage__formCard}>
                                <h2 className={styles.appealsPage__formTitle}>Создание заявления:</h2>
                                
                                <div className={styles.appealsPage__inputGroup}>
                                    <label className={styles.appealsPage__label}>Заголовок:</label>
                                    <input type="text" placeholder="Напишите что-то..." className={styles.appealsPage__input} />
                                </div>

                                <div className={styles.appealsPage__inputGroup}>
                                    <label className={styles.appealsPage__label}>Содержание:</label>
                                    <textarea placeholder="Напишите что-то..." className={styles.appealsPage__textarea} />
                                </div>

                                <div className={styles.appealsPage__formFooter}>
                                    <button className={styles.appealsPage__btnAttach}>Прикрепить файлы</button>
                                    <div className={styles.appealsPage__formActions}>
                                        <GlassBtn typeOfBtn="confirm" onClick={() => setIsFormOpen(false)} />
                                        <GlassBtn typeOfBtn="close" onClick={() => setIsFormOpen(false)} />
                                    </div>
                                </div>
                                <p className={styles.appealsPage__fileList}>first_problem.png, my_explain.pdf</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
};

export default AppealsPage;