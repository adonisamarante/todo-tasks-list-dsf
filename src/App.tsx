import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { CustomInput } from "./components/CustomInput"
import { ButtonCreate } from "./components/ButtonCreate"
import { EmptyList } from "./components/EmptyList"
import { useEffect, useState } from "react"
import { Task } from "./components/Task"

export interface TaskListItem {
  description: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskListItem[]>([])

  const taskCounter = tasks.length

  const doneTasksList = tasks.filter((task) => task.done === true)
  const doneTasksCounter = doneTasksList.length ?? 0

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task.description !== taskToDelete
    )

    setTasks(tasksWithoutDeletedOne)
  }

  useEffect(() => {
    setTasks([
      {
        description: "Teste de task a fazer",
        done: false,
      },
      {
        description: "Teste de task feita",
        done: true,
      },
      {
        description: "Teste de task a fazer dois",
        done: false,
      },
      {
        description: "Teste de task a fazer",
        done: false,
      },
      {
        description: "Teste de task feita",
        done: true,
      },
      {
        description: "Teste de task a fazer dois",
        done: false,
      },
      {
        description: "Teste de task a fazer",
        done: false,
      },
      {
        description: "Teste de task feita",
        done: true,
      },
      {
        description: "Teste de task a fazer dois",
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
              {tasks.map((task, index) => (
                <div
                  key={task.description}
                  className={index === tasks.length - 1 ? styles.LastItem : ""}
                >
                  <Task taskInfo={task} onDeleteTask={deleteTask} />
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
