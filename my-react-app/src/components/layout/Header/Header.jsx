import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Header.module.css";
import useWindowSize from "@hooks/useWindowSize";

import logo from "@icons/logo.svg";
import burgerIcon from "@icons/burger.svg";
import crossIcon from "@icons/cross.svg";

const menuItems = [
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "Заявления", link: "/appeals" },
  { id: 3, title: "Профиль", link: "/profile" },
  { id: 4, title: "Обратная связь", link: "/feedback" },
];

const Header = () => {
  const { width, _ } = useWindowSize();
  const [isOpen, setIsOpen] = useState(width > 768);

  const currentPath = window.location.pathname;

  const menuVariants = {
    closed: {
      height: "60px", // Высота закрытого хедера
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" }
    },
    open: {
      height: "auto", // Раскрывается по контенту
      transition: { duration: 0.3, ease: "easeInOut", when: "beforeChildren" }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={classes.header}>
      <motion.div 
        className={classes.navBar}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className={classes.topRow}>
          <img src={logo} alt="Logo" className={classes.logo} />
          
          {/* Показываем меню только на больших экранах, на мобильных оно будет в виде бургер-меню */}
          {width > 768 && (
            <AnimatePresence>
              {isOpen && (
                <motion.nav className={classes.menu}>
                  <ul className={classes.list}>
                    {menuItems.map((item) => {
                      const isActive = currentPath === item.link;
                      return (
                      <motion.li 
                        key={item.id} 
                        variants={itemVariants}
                        className={classes.menuItem}
                      >
                        <a href={item.link} className={`${classes.link} ${isActive ? classes.activeLink : ""}`}>
                          {item.title}
                        </a>
                      </motion.li>
                      )
                    })}
                  </ul>
                </motion.nav>
            )}
            </AnimatePresence>
          )}
          <button className={classes.burgerBtn} onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? crossIcon : burgerIcon} alt="Toggle Menu" />
          </button>
        </div>

        {width < 768 && (
          <AnimatePresence>
            {isOpen && (
              <motion.nav className={classes.menu}>
                <ul className={classes.list}>
                  {menuItems.map((item) => {
                    const isActive = currentPath === item.link;
                    return (
                      <motion.li 
                        key={item.id} 
                        variants={itemVariants}
                        className={classes.menuItem}
                      >
                    <a href={item.link} className={`${classes.link} ${isActive ? classes.activeLink : ""}`}>
                      {item.title}
                    </a>
                  </motion.li>
                  )
                    })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        )}
      </motion.div>
    </header>
  );
};

export default Header;