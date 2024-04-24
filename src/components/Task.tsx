import { ButtonDelete } from "./ButtonDelete"
import { CustomCheckbox } from "./CustomCheckbox"
import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={styles.task}>
      <CustomCheckbox />
      <span style={{ color: "white" }}>test</span>
      <ButtonDelete />
    </div>
  )
}
