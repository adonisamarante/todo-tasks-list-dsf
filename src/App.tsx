import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { CustomInput } from "./components/CustomInput"
import { ButtonCreate } from "./components/ButtonCreate"
import { EmptyList } from "./components/EmptyList"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Task } from "./components/Task"

export interface TaskListItem {
  description: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskListItem[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState("")

  const taskCounter = tasks.length

  const doneTasksList = tasks.filter((task) => task.done === true)
  const doneTasksCounter = doneTasksList.length ?? 0

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, { description: newTaskDescription, done: false }])
    setNewTaskDescription("")
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTaskDescription(event.target.value)

    console.log(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório")
  }

  function handleDoneTask(taskToChange: TaskListItem) {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.description === taskToChange.description) {
          return { ...task, done: !taskToChange.done }
        }
        return task
      })
    })
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.description !== taskToDelete
    )

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div className={styles.PageContainer}>
      <Header />

      <body className={styles.Wrapper}>
        <div className={styles.Container}>
          <form onSubmit={handleCreateNewTask} className={styles.CreateForm}>
            <CustomInput
              value={newTaskDescription}
              onChangeDescription={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
            />
            <ButtonCreate />
          </form>

          <div className={styles.ListInfoContainer}>
            <div className={styles.ListInfoItem}>
              <span className={styles.CreatedTitle}>Tarefas Criadas</span>
              <span className={styles.InfoCounter}>{taskCounter}</span>
            </div>
            <div className={styles.ListInfoItem}>
              <span className={styles.FinishedTitle}>Concluídas</span>
              <span className={styles.InfoCounter}>{doneTasksCounter}</span>
            </div>
          </div>

          {!tasks?.length ? (
            <EmptyList />
          ) : (
            <div className={styles.TaskListContainer}>
              {tasks.map((task, index) => (
                <div
                  key={task.description}
                  className={index === tasks.length - 1 ? styles.LastItem : ""}
                >
                  <Task
                    taskInfo={task}
                    onDeleteTask={deleteTask}
                    handleDoneTask={handleDoneTask}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </body>
    </div>
  )
}

export default App
