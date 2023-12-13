import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Question5 } from ".."
import userEvent from "@testing-library/user-event"

describe("Question_5", () => {
  test("Should render counter and buttons", () => {
    render(<Question5/>)

    const plusBtn = screen.getByRole("button", {name: "+"})
    const minusBtn = screen.getByRole("button", { name: "-" })
    const counter = screen.getByTestId("counter")

    expect(plusBtn).toBeInTheDocument()
    expect(minusBtn).toBeInTheDocument()
    expect(counter).toBeInTheDocument()
  })

  test("Should plus and minus 1 after click each button, if lower than 0, show 0 ", async () => {
    const user = userEvent.setup()
    render(<Question5/>)

    const plusBtn = screen.getByRole("button", { name: "+" })
    const minusBtn = screen.getByRole("button", { name: "-" })
    const counter = screen.getByTestId("counter")

    await user.click(plusBtn)
    expect(counter).toHaveTextContent("Counter: 1")

    await user.click(minusBtn)
    expect(counter).toHaveTextContent("Counter: 0")

    // already 0 
    await user.click(minusBtn)
    expect(counter).toHaveTextContent("Counter: 0")
  })
})
