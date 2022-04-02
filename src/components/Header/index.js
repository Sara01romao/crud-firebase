import React from 'react';
import Logo from '../../assets/logo.svg'
import styles from './styles.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Na caixa"/>
    </header>
  )
}
