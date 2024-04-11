import styles from "./CustomInput.module.css"

interface CustomInputProps {
  h?: number
  w?: number
}

export function CustomInput({ h = 54, w = 491 }: CustomInputProps) {
  return (
    <input
      className={styles.customInput}
      style={{ height: h, width: w }}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
