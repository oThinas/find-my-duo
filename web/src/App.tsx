interface ButtonProps {
  title?: string,
  count: number
}

function Button({ title = "Enviar", ...props }: ButtonProps) {
  return(
    <button>
      {title} {props.count}
    </button>
  )
}

export function App() {
  return(
    <div>
      <Button count={1} />
      <Button count={2} />
      <Button count={3} />
      <Button title="Diferente" count={4} />
    </div>
  )
}
