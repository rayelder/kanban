import { useState } from 'react'

import style from './Dropzone.module.css'

interface Props {
    id: number
    onDrop: Function
}

export default function Dropzone({ id, onDrop }: Props) {
    const [show, setShow] = useState(false)
    return (
        <div
            onDragEnter={() => setShow(true)}
            onDragLeave={() => setShow(false)}
            onDrop={() => {
                onDrop()
                setShow(false)
            }}
            onDragOver={(e) => e.preventDefault()}
            className={show ? style.show : style.hide}
        >
            {`Drop zone: ${id}`}
        </div>
    )
}
