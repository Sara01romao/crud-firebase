import React from 'react'
import firebase from '../../services/firebaseConnection';

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
    <div>Modal{item}

        <button onClick={() => remover(item)}>Exluir</button>
    </div>
  )
}
