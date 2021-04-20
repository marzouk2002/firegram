import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

 const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createAt', 'desc')
            .onSnapshot((snap) => {
                let document = [];
                snap.forEach(doc => {
                   document.push({
                       ...doc.data(),
                       id:doc.id
                   })
                })
                setDocs(document)
                console.log(document)
            })

        return () => unsub();
    }, [collection])

    return { docs }
 }

 
export default useFireStore