import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

 const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('creatAt', 'desc')
            .onSnapshot((snap) => {
                let document = [];
                snap.forEach(doc => {
                   document.push({
                       ...doc.data,
                       id:doc.id
                   })
                })
                setDocs(document)
            })

        return () => unsub();
    }, [collection])

    return { docs }
 }
