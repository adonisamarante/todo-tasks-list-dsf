import styles from "./EmptyList.module.css"
import Clipboard from "./../assets/Clipboard.svg"

export function EmptyList() {
  return (
    <div className={styles.EmptyStateConainer}>
      <div className={styles.Separator}></div>
      <img src={Clipboard} alt="" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
