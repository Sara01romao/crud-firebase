import React from 'react';
import { Link } from 'react-router-dom';
import Lista from '../../components/List';
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={`${styles.containerHome} `}>

      <div className={styles.info}>
        <h1 className='title'>Lista</h1>
        
        <Link to="/cadastrar" className={styles.add}>+ Adicionar</Link>
        <Lista/>
      </div>

      
    </div>
  )
}
