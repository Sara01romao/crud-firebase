import React from 'react';
import Lista from '../../components/Lista';
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={`${styles.containerHome} container`}>

      <h1 className='title'>Lista</h1>

      <Lista/>
    </div>
  )
}
