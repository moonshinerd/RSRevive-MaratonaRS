import React, { useState } from 'react';
import style from './styles.module.css';
import logo from './assets/RSRevive.png';
import { FiAlignJustify } from "react-icons/fi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.headerWrapper}>
      <div className={style.header}>
        <div className={style.logo}>
          <a href="/">
            <img src={logo} alt="SOSRS Logo" width="180" height="50" />
          </a>
        </div>
        <div className={style.hamburger} onClick={toggleMenu}>
          <FiAlignJustify />
        </div>
      </div>
      {menuOpen && (
        <div className={style.menu}>
          <a href="/login" className={style.menuItem}>Login</a>
          <a href="/vagas" className={style.menuItem}>Vagas</a>
          <a href="/cursos" className={style.menuItem}>Cursos</a>
          <a href="/aboutus" className={style.menuItem}>Sobre Nós</a>
        </div>
      )}
    </header>
  );
};
