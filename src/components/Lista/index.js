import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection';

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
                        caixa: item.data().caixa,
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

console.log(process.env.REACT_APP_API_KEY)
  return (
    <div>
        <h1>Lista</h1>
    
        {console.table(dataList)}
        {dataList.map((item) => <li>{item.caixa}{item.data}</li>)}

    
        
    </div>
  )
}
