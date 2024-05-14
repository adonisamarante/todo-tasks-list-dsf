import { Check } from "@phosphor-icons/react"
import styles from "./CustomCheckbox.module.css"

interface CheckboxProps {
  checked: boolean
  handleCheckChange: () => void
}

export function CustomCheckbox({
  checked = false,
  handleCheckChange,
}: CheckboxProps) {
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
