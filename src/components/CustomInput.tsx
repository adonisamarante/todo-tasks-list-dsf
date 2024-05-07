import styles from "./CustomInput.module.css"

interface CustomInputProps {
  w?: number | string
}

export function CustomInput({ w = "inherit" }: CustomInputProps) {
  return (
    <input
      className={styles.customInput}
      style={{ width: w }}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
