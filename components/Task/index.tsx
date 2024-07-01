import style from './Task.module.css'

interface Props {
    uniqueID: string
    columnID: number
    title: string
    setDraggedTask: any
    onDelete: Function
}

export default function Task({
    uniqueID,
    columnID,
    title,
    setDraggedTask,
    onDelete,
}: Props) {
    return (
        <div
            className={style.base}
            draggable
            onDragStart={() => setDraggedTask(uniqueID)}
            onDragEnd={() => setDraggedTask(null)}
        >
            {/* <ul className={style.meta}>
                <li>{`uniqueID: ${uniqueID}`}</li>
                <li>{`columnID: ${columnID}`}</li>
            </ul> */}
            <h3>{title}</h3>
            <a href="#" onClick={() => onDelete(uniqueID)}>
                Delete task
            </a>
        </div>
    )
}
