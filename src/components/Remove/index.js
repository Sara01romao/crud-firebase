import React from 'react'
import firebase from '../../services/firebaseConnection';
import styles from './styles.module.css';
import Trash from '../../assets/trash.svg'

export default function RemoveModal({item, setValue}) {

   function remover(id){
        async function excluir(id){
            await firebase.firestore().collection('caixas')
            .doc(id)
            .delete()
            .then(()=>{
            console.log('excluido')
            setValue(null)
            })
        
        }

        excluir(id)
        
   }

   

  return (
    <div className={styles.modal}>

      <div className={styles.modalContainer}>
           <img src={Trash} alt="Icon Lixeira"></img>

          <div className={styles.info}>
            <h3>Excluir Caixa <span>Nº {item}</span></h3>
            <p>Tem certeza que você deseja excluir esta caixa?</p>
          </div>
         
          <div className={styles.options}>
            <button className={styles.btnClose} onClick={()=> setValue(null)}>Cancelar</button>
            <button className={styles.btnRemove} onClick={() => remover(item)}>Exluir</button>
          </div>
          
      </div>

        
    </div>
  )
}
