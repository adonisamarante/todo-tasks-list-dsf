import { ButtonDelete } from "./ButtonDelete"
import { CustomCheckbox } from "./CustomCheckbox"
import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={styles.task}>
      <CustomCheckbox />
      <span style={{ color: "white" }}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. fsdifisodf ifsodfjos ifsdofjsd ifsjdfos
      </span>
      <ButtonDelete />
    </div>
  )
}
