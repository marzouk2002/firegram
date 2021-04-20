import React, { useState } from 'react'

function Form() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const handleChage = (e) => {
        let selected = e.target.files[0]
        const regexType= /^image/
        if(selected && regexType.test(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError('Please select an image file')
        }
    }

    return (
        <form>
            <label>
            <input type="file" onChange={handleChage}/>
            </label>
            <div className="output">
                { error && <div className='error'>{error}</div>}
                { file && <div className='file'>{file.name}</div>}
            </div>
        </form>
    )
}

export default Form