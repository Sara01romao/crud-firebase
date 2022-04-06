import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../services/firebaseConnection';
import styles from './styles.module.css'

export default function Create() {

   const [caixa, setCaixa] = useState('');
   const [especie, setEspecie] = useState('');
   const [data, setData] = useState('');
   const [msgError, setMsgError] = useState(null);
   const navigate = useNavigate();
   
    function handleSubmit(event){
        event.preventDefault();
    
        async function CreatePost(){
          try{
            setMsgError(null);
            let dados = firebase.firestore().collection("caixas").doc(caixa);

            await dados
            .get()
            .then((doc)=>{
                if(!doc.exists){
                  dados
                  .set({
                    especie: especie,
                    data: data
                  })
                  
                  setCaixa('');
                  setEspecie('')
                  setData('')
                  toast.success("Adicionado com sucesso");
                  navigate('/')
                }else{
                  setMsgError('Número já existe')
                  toast.error("Número da Caixa já existe");
                }
            })
            .catch((error) =>{
              console.log("Erro" + error)
            })
          }catch(e){
            console.log("Erro" + e)

          }finally{
          
          }
        
        }

        CreatePost()
      
    }


  return (
    <section className={`${styles.formSection}`}>

      <h1 className='title'>Cadastrar</h1>
      
     <div className={`${styles.formContainer}`}>
        <form onSubmit={handleSubmit} className={`${styles.form}`}>
          
          <div className={styles.inputs}>
              <div>
                  <label htmlFor='caixa'>Número da Caixa</label>
                  <input type="number" id="caixa" value={caixa} min="1" onChange={({target})=>setCaixa(target.value)} required/>
                  {msgError && <p style={{color:'red', marginTop:'5px'}}>{msgError}</p>}
              </div>

              <div>
                  <label htmlFor='data'>Data</label>
                  <input type="date" id="data" value={data} onChange={({target})=> setData(target.value)} required/>
              </div>
          </div>

          <div>
              <label htmlFor='especie'>Espécie</label>
              <select value={especie} id="especie" onChange={({target})=>setEspecie(target.value)} required>
                <option value="" disabled>Selecione</option>
                <option value="Jataí">Jataí</option>
                <option value="Túbuna">Túbuna</option>
                <option value="Iraí">Iraí</option>
                <option value="Mirin">Mirim</option>

              </select>
            </div>

          <button className='btn btn1'>Cadastrar</button>
          
        </form>

          <button className={`${styles.button} linkBtn`}>
              <Link to='/'>Cancelar</Link>
          </button>
        </div>
     
    
     
    </section>
  )
}
