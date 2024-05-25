import React from 'react'
import style from './styles.module.css'
import logo from '../../assets/logo.svg'
import user from '../../assets/user.png'
import { FiAlignJustify } from "react-icons/fi";

export const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <div>
        <img src={logo} alt="" className={style.logo}/>
      </div>
      <div className={style.userNavigation}>
        <img src={user} alt="" className={style.userIcon}/>
        <FiAlignJustify className={style.hamburger}/>
      </div>
    </header>
  )
}
