import React, { useRef } from 'react'

const InputRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputRef.current?.value);
        
    }
    return (
        <div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' ref={inputRef} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default InputRef