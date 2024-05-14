import { PlusCircle } from "@phosphor-icons/react"
import styles from "./ButtonCreate.module.css"

export function ButtonCreate() {
  return (
    <button className={styles.buttonCreate} type="submit">
      Criar
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}
