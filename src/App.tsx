import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { CustomInput } from "./components/CustomInput"
import { ButtonCreate } from "./components/ButtonCreate"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.Wrapper}>
        <div className={styles.CreateContainer}>
          <CustomInput />
          <ButtonCreate />
        </div>
      </div>
    </div>
  )
}

export default App
