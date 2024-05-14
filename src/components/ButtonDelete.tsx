import { Trash } from "@phosphor-icons/react"
import styles from "./ButtonDelete.module.css"

interface DeleteBtnProps {
  onDeleteTask: () => void
}

export function ButtonDelete({ onDeleteTask }: DeleteBtnProps) {
  return (
    <button className={styles.button} onClick={onDeleteTask}>
      <Trash size={18} weight="bold" />
    </button>
  )
}
