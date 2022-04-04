import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import styles from './styles.module.css';
import EditIcon  from '../../assets/edit-icon.svg';
import RemoveIcon  from '../../assets/remove-icon.svg';

export default function Lista() {
    const [dataList, setDataList] = useState([]);

    useEffect(()=>{
        async function dataGetList(){
            await firebase.firestore().collection("caixas")
            .get()
            .then((snapshot)=>{
                let list = [];

                snapshot.forEach((item)=>{
                    list.push({
                        id: item.id,
                        especie: item.data().especie,
                        data: item.data().data
                    })
                
                    
                })
                console.log("ok")
            setDataList(list)
        
            })
        }

        dataGetList()
    }, [])

   

  return (
    <section className={styles.list}>

       <table>
            <tr>
                <th>Número caixa</th>
                <th>Espécie</th>
                <th>Data</th>
                <th>Opções</th>
            </tr>
            
            {dataList.map((item) => <tr key={item.id}>
                <td className={styles.number}>{item.id}</td>
                <td  className={styles.especie}>{item.especie}</td>
                <td> {item.data}</td>
                <td className={styles.options}> 
                    <button><img src={EditIcon} alt="Editar"/></button>
                    <button><img src={RemoveIcon} alt="Remover"/></button>
                
                </td>
               
            </tr>)}
            

        </table>

        
    </section>
  )
}
