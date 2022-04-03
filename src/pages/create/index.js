import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';

export default function Create() {

   const [caixa, setCaixa] = useState('');
   const [especie, setEspecie] = useState('');
   const [data, setData] = useState('');
   const [item, setItem] = useState([])
   
    function handleSubmit(event){
      event.preventDefault();

      /*   item.push([...item], caixa, especie, data);
        console.table(item) */


      /* async function CreatePost(){
        await firebase.firestore().collection("caixas")
        .doc(caixa)
        .set({
          especie: especie,
          data: data
        })
        .then(()=>{
          console.log("Okay")
        })
        .catch((error)=>{
          console.log('erro', error)
        })

      }

      CreatePost(); */


      async function CreatePost(){

       let dados = await firebase.firestore().collection("caixas").doc(caixa)
        dados
        .get()
        .then((doc)=>{
          if(!doc.exists){
            dados
            .set({
              especie: especie,
              data: data
            })
            console.log("Enviado")
          }else{
            console.log("erro")
          }
        })
        
       
      }

      CreatePost()
      
    }


 
    

  return (
    <div className={` container`}>

      <h1 className='title'>Cadastrar</h1>
      
      <form onSubmit={handleSubmit}>
         <div>
            <label >Número da Caixa</label>
            <input type="number" value={caixa} onChange={({target})=>setCaixa(target.value)}/>
         </div>

         <div>
            <label>Espécie</label>
            <select value={especie} onChange={({target})=>setEspecie(target.value)}>
              <option value="" disabled>Selecione</option>
              <option value="Jataí">Jataí</option>
              <option value="Túbuna">Túbuna</option>
              <option value="Iraí">Iraí</option>
              <option value="Mirin">Mirim</option>

            </select>
         </div>

         <div>
            <label>Data</label>
            <input type="date" value={data} onChange={({target})=> setData(target.value)}/>
         </div>

         <button>Cadastrar</button>
         
      </form>
     
    </div>
  )
}
