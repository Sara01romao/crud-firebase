import React from 'react';
import { Link } from 'react-router-dom';
import Lista from '../../components/List';
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={`${styles.containerHome} container`}>

      <h1 className='title'>Lista</h1>
      
      <Link to="/cadastrar">+ Adicionar</Link>
      <Lista/>
    </div>
  )
}
