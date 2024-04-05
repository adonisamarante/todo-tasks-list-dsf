interface CustomInputProps {
  h?: number
  w?: number
}

export function CustomInput({ h = 10, w = 30 }: CustomInputProps) {
  return <input style={{ height: h, width: w }} />
}
