import { useState } from "react"
import { Check } from "@phosphor-icons/react"
import styles from "./CustomCheckbox.module.css"

export function CustomCheckbox() {
  const [checked, setChecked] = useState(false)

  function handleCheckChange() {
    setChecked(!checked)
  }

  return (
    <label className={styles.customCheckbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxCheckmark}>
        {checked && <Check size={10} />}
      </span>
    </label>
  )
}
