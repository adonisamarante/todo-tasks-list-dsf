import { ButtonDelete } from "./ButtonDelete"
import { CustomCheckbox } from "./CustomCheckbox"
import styles from "./Task.module.css"
import { TaskListItem } from "../App"

interface TaskProps {
  taskInfo: TaskListItem
  handleDoneTask: (taskToChange: TaskListItem) => void
  onDeleteTask: (taskToDelete: string) => void
}

export function Task({ taskInfo, handleDoneTask, onDeleteTask }: TaskProps) {
  function handleCheckChange() {
    handleDoneTask(taskInfo)
  }

  function handleDeleteTask() {
    onDeleteTask(taskInfo.description)
  }

  return (
    <div className={styles.task}>
      <CustomCheckbox
        checked={taskInfo.done}
        handleCheckChange={handleCheckChange}
      />

      <span
        style={{
          textDecoration: taskInfo.done ? "line-through" : "none",
          color: taskInfo.done ? "var(--gray-300)" : "var(--gray-100)",
        }}
      >
        {taskInfo?.description}
      </span>

      <ButtonDelete onDeleteTask={handleDeleteTask} />
    </div>
  )
}
