import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Question4 } from ".."
import userEvent from "@testing-library/user-event"

describe("Question_4", () => {
  test("Should render buttons and code", () => {
    render(<Question4 />)

    const loginBtn = screen.getByRole("button", { name: "Login" })
    const logoutBtn = screen.getByRole("button", { name: "Logout" })
    const code = screen.getByTestId("code")

    expect(loginBtn).toBeInTheDocument()
    expect(logoutBtn).toBeInTheDocument()
    expect(code).toBeInTheDocument()
  })

  test("Should switch text after click login button", async () => {
    const user = userEvent.setup()
    render(<Question4/>)

    const loginBtn = screen.getByRole("button", { name: "Login" })
    const text = screen.getByTestId("text")

    await user.click(loginBtn)
    expect(text.textContent).toBe("Log in successfully!")
  })
})
