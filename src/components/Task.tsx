import { ButtonDelete } from "./ButtonDelete"
import { CustomCheckbox } from "./CustomCheckbox"
import styles from "./Task.module.css"
import { TaskListItem } from "../App"

interface TaskProps {
  taskInfo: TaskListItem
  onDeleteTask: (taskToDelete: string) => void
}

export function Task({ taskInfo, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(taskInfo.description)
  }

  return (
    <div className={styles.task}>
      <CustomCheckbox />
      <span>{taskInfo?.description}</span>
      <ButtonDelete onDeleteTask={handleDeleteTask} />
    </div>
  )
}
