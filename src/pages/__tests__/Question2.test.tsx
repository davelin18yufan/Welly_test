import "@testing-library/jest-dom/vitest"
import { describe, test, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import {fireEvent, render, screen} from "@testing-library/react"
import { Question2 } from ".."

const user = userEvent.setup()

describe("Question_2", () => {
  test("Should render input, output and button", () => {
    render(<Question2/>)

    const input = screen.getByRole('textbox')
    const output = screen.getByTestId('output')
    const btn = screen.getByRole("button")

    expect(input).toBeInTheDocument()
    expect(output).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })

  test("Should filter the input array", async () => {
    render(<Question2 />)

    const input = screen.getByRole("textbox")
    const output = screen.getByTestId("output")
    const btn = screen.getByRole("button")

    fireEvent.change(input, {target: {value: "[4,5,6,7]"}})
    fireEvent.click(btn)

    expect(output.textContent).toBe("6,7")
  })

  test("Input formation accept only numbers array", async () => {
    render(<Question2 />)

    const input = screen.getByRole("textbox")
    const output = screen.getByTestId("output")
    const btn = screen.getByRole("button")
    
    // alert mock
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {})

    await user.type(input, "01fh5")
    await user.click(btn)

    expect(output.textContent).toBe("null")
    expect(alertMock).toHaveBeenCalledWith("請輸入正確字元")

    // reset
    alertMock.mockRestore()
  })

  
})