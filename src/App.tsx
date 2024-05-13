import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { CustomInput } from "./components/CustomInput"
import { ButtonCreate } from "./components/ButtonCreate"
import { EmptyList } from "./components/EmptyList"
import { useEffect, useState } from "react"
import { Task } from "./components/Task"

interface TaskListItem {
  taskDescription: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskListItem[]>([])

  const taskCounter = tasks.length

  const doneTasksList = tasks.filter((task) => task.done === true)
  const doneTasksCounter = doneTasksList.length ?? 0

  useEffect(() => {
    setTasks([
      {
        taskDescription: "Teste de task a fazer",
        done: false,
      },
      {
        taskDescription: "Teste de task feita",
        done: true,
      },
      {
        taskDescription: "Teste de task a fazer dois",
        done: false,
      },
      {
        taskDescription: "Teste de task a fazer",
        done: false,
      },
      {
        taskDescription: "Teste de task feita",
        done: true,
      },
      {
        taskDescription: "Teste de task a fazer dois",
        done: false,
      },
      {
        taskDescription: "Teste de task a fazer",
        done: false,
      },
      {
        taskDescription: "Teste de task feita",
        done: true,
      },
      {
        taskDescription: "Teste de task a fazer dois",
        done: false,
      },
    ])
  }, [])

  return (
    <div className={styles.PageContainer}>
      <Header />

      <body className={styles.Wrapper}>
        <div className={styles.Container}>
          <div className={styles.CreateContainer}>
            <CustomInput />
            <ButtonCreate />
          </div>

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
              {tasks.map(() => (
                <Task />
              ))}
            </div>
          )}
        </div>
      </body>
    </div>
  )
}

export default App
