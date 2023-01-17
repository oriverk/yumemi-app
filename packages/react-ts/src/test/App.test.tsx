import { render, screen } from "@testing-library/react"
import App from "../App";

test("'Vite + React'が描画されている", () => {
  render(<App />)
  screen.debug()
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})

