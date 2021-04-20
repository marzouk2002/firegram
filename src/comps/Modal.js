import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({ selectedImg, setSelectedImg }) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div onClick={handleClick} className="backdrop"
        initial={{opacity:0}}
        animate={{opacity:1}}>
            <motion.img src={ selectedImg } alt="enlarged img"
            initial={{ y: '-100vh'}}
            animate={{ y: '0'}}/>
        </motion.div>
    )
}
