import { Fragment } from 'react'
import Task from '@/components/Task'
import Dropzone from '../Dropzone'
import AddTask from '../AddTask'

import style from './Column.module.css'

type TaskType = {
    uniqueID: string
    columnID: number
    title: string
    show: boolean
}

interface Props {
    columnID: number
    title: string
    columnTasks: Array<TaskType>
    setDraggedTask: any
    onDrop: any
    onDelete: Function
    addTask: Function
}

export default function Column({
    columnID,
    title,
    columnTasks,
    setDraggedTask,
    onDrop,
    onDelete,
    addTask,
}: Props) {
    var filterColumnTasks = columnTasks.filter(
        (task) => task.columnID === columnID && task.show
    )

    // each column needs a unique array of tasks

    return (
        <div className={style.base}>
            <h2>{title}</h2>
            {/* <p>{`columnID: ${columnID}`}</p> */}
            <AddTask columnID={columnID} addTask={addTask} />

            <div className={style.list}>
                <Dropzone id={0} onDrop={() => onDrop(columnID, 0)} />
                {filterColumnTasks.map((task, index) => (
                    <Fragment key={index}>
                        <Task
                            uniqueID={task.uniqueID}
                            columnID={task.columnID}
                            title={task.title}
                            setDraggedTask={setDraggedTask}
                            onDelete={onDelete}
                        />
                        <Dropzone
                            id={index + 1}
                            onDrop={() => onDrop(columnID, index + 1)}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
