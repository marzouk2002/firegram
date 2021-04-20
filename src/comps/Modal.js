import React from 'react'

export default function Modal({ selectedImg, setSelectedImg }) {
    return (
        <div onClick={()=>setSelectedImg(null)} className="backdrop">
            <img src={ selectedImg } alt="enlarged img"/>
        </div>
    )
}
