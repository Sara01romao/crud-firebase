import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../services/firebaseConnection';

export default function Edit() {

    const {id} = useParams();
    const [especie, setEspecie]= useState("");
    const [data, setData] = useState("")


    useEffect(()=>{
        //buscar item por id
      async function handleBuscar(){
        await firebase.firestore().collection('caixas')
        .doc(id)//id da doc
        .get()
        .then((snapshot)=>{
          setEspecie(snapshot.data().especie)
          setData(snapshot.data().data)
        })
      }

      handleBuscar()
    },[id])

      



  return (
    <div>
      
      Edit {id}

      <form >
          
          <div >
             

              <div>
                  <label>Data</label>
                  <input type="date" value={data} onChange={({target})=> setData(target.value)} required/>
              </div>
          </div>

          <div>
              <label>Espécie</label>
              <select value={especie} onChange={({target})=>setEspecie(target.value)} required>
                <option value="" disabled>Selecione</option>
                <option value="Jataí">Jataí</option>
                <option value="Túbuna">Túbuna</option>
                <option value="Iraí">Iraí</option>
                <option value="Mirin">Mirim</option>

              </select>
            </div>
{/* 
          <button className='btn btn1'>Cadastrar</button> */}
          
        </form>
    

    </div>
  )
}
