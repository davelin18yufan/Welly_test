import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, test, expect } from "vitest"
import { Question1 } from ".."

describe("Question_1", () => {
  test("render input and output DOM", () => {
    render(<Question1 />)

    const input = screen.getByRole("textbox")
    const output = screen.getByTestId("output")

    expect(input).toBeInTheDocument()
    expect(output).toBeInTheDocument()
  })

  test("input should be reversed", async () => {
    const user = userEvent.setup()
    render(<Question1/>)

    const input = screen.getByRole("textbox")
    const output = screen.getByTestId("output")

    await user.type(input, 'hello')
    expect(output).toHaveTextContent("olleh")
  })
})
