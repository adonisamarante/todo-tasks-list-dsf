import styles from "./CustomInput.module.css"

interface CustomInputProps {
  w?: number
}

export function CustomInput({ w = 491 }: CustomInputProps) {
  return (
    <input
      className={styles.customInput}
      style={{ width: w }}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
