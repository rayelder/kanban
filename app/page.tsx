'use client'

import { useState } from 'react'
import Column from '@/components/Column'
import initialTasks from '../data/tasks'

import style from './page.module.css'

export default function Home() {
    const [tasks, setTasks] = useState(initialTasks)
    const [draggedTask, setDraggedTask] = useState(null)

    const onDrop = (columnID: number, positionID: number) => {
        // console.log(
        //     `${draggedTask} was dropped on column ${columnID} at position ${positionID}`
        // )

        if (draggedTask === null || draggedTask === undefined) return

        const taskToMove = tasks.filter((task) => task.uniqueID === draggedTask)

        const updatedTasks = tasks.filter(
            (task) => task.uniqueID !== draggedTask
        )

        updatedTasks.splice(positionID, 0, {
            ...taskToMove[0],
            columnID: columnID,
        })

        // console.log(updatedTasks)
        // console.log(`positionID: ${positionID}`)

        setTasks(updatedTasks)
    }

    const onDelete = (uniqueID: string) => {
        const updatedTasks = tasks.filter((task) => task.uniqueID !== uniqueID)
        setTasks(updatedTasks)
    }

    const addTask = (newTask: any) => {
        setTasks([newTask, ...tasks])
    }

    return (
        <main className={style.main}>
            <h1>Coding challenge: Kanban</h1>

            <div className={style.columns}>
                <Column
                    columnID={0}
                    title="Backlog"
                    columnTasks={tasks}
                    setDraggedTask={setDraggedTask}
                    onDrop={onDrop}
                    onDelete={onDelete}
                    addTask={addTask}
                />
                <Column
                    columnID={1}
                    title="Completed"
                    columnTasks={tasks}
                    setDraggedTask={setDraggedTask}
                    onDrop={onDrop}
                    onDelete={onDelete}
                    addTask={addTask}
                />
            </div>
        </main>
    )
}
