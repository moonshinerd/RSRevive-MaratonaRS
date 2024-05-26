import React from 'react';
import style from './styles.module.css';
import logo from './assets/RSRevive.png';
import { FiAlignJustify } from "react-icons/fi";

export const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.logo}>
          <a href="/home">
            <img src={logo} alt="SOSRS Logo" width="180" height="50" />
          </a>
        </div>
        <div className={style.hamburger}>
          <FiAlignJustify />
        </div>
      </div>
    </header>
  );
};
