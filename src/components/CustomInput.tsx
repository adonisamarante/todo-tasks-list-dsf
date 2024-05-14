import { ChangeEvent, InvalidEvent } from "react"
import styles from "./CustomInput.module.css"

interface CustomInputProps {
  w?: number | string
  value?: string
  onChangeDescription: (event: ChangeEvent<HTMLInputElement>) => void
  onInvalid: (event: InvalidEvent<HTMLInputElement>) => void
}

export function CustomInput({
  w = "inherit",
  value = "",
  onChangeDescription,
  onInvalid,
}: CustomInputProps) {
  return (
    <input
      name="description"
      value={value}
      className={styles.customInput}
      style={{ width: w }}
      onChange={onChangeDescription}
      onInvalid={onInvalid}
      placeholder="Adicione uma nova tarefa"
      required
    />
  )
}
