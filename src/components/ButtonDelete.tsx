import { Trash } from "@phosphor-icons/react"
import styles from "./ButtonDelete.module.css"

export function ButtonDelete() {
  return (
    <button className={styles.button}>
      <Trash size={18} weight="bold" />
    </button>
  )
}
