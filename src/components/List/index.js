import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import styles from './styles.module.css';
import EditIcon  from '../../assets/edit-icon.svg';
import RemoveIcon  from '../../assets/remove-icon.svg';
import RemoveModal from '../Remove';

export default function Lista() {
    const [dataList, setDataList] = useState([]);
    const [item, setItem] = useState(null);

    useEffect(()=>{
        async function dataGetList(){
            await firebase.firestore().collection("caixas")
            .onSnapshot((doc)=>{
                let list = [];

                doc.forEach((item)=>{
                    list.push({
                        id: item.id,
                        especie: item.data().especie,
                        data: item.data().data
                    })
                
                    
                })
              
              setDataList(list)
            })
           
        }

        dataGetList()
    }, [])

   function handleRemove(id){
    console.log(id)
    setItem(id)
   }


   

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
                    <button ><img src={EditIcon} alt="Editar"/></button>
                    <button onClick={()=>handleRemove(item.id)}><img src={RemoveIcon} alt="Remover"/></button>
                
                </td>
               
            </tr>)}
            

        </table>
        {item && <RemoveModal item={item} setValue={setItem} />  }
      
    </section>
  )
}


