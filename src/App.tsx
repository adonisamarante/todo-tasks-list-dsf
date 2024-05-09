import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { CustomInput } from "./components/CustomInput"
import { ButtonCreate } from "./components/ButtonCreate"
import Clipboard from "./assets/Clipboard.svg"

function App() {
  return (
    <div>
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
              <span className={styles.InfoCounter}>0</span>
            </div>
            <div className={styles.ListInfoItem}>
              <span className={styles.FinishedTitle}>Concluídas</span>
              <span className={styles.InfoCounter}>0</span>
            </div>
          </div>

          <div className={styles.EmptyStateConainer}>
            <div className={styles.Separator}></div>
            <img src={Clipboard} alt="" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
