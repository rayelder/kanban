import { useState } from 'react'

import style from './AddTask.module.css'

interface Props {
    columnID: number
    addTask: Function
}

export default function AddTask({ columnID, addTask }: Props) {
    const [title, setTitle] = useState(null)

    const handleChange = (e: any) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        var id = Math.random().toString(16).slice(2)

        const newTask = {
            uniqueID: id,
            columnID: columnID,
            show: true,
            title: title,
        }

        setTitle(null)

        addTask(newTask)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title === null ? '' : title}
                    onChange={(e) => handleChange(e)}
                    className={style.input}
                />
                <button id="btn" name="btn" className={style.btn}>
                    Add task
                </button>
            </form>
        </div>
    )
}
