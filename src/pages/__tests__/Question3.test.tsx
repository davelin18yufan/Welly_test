import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import { Question3 } from ".."

describe("QUestion_3", () => {
  test("Should render input and answer", () => {
    render(<Question3/>)

    const firstNameInput = screen.getByPlaceholderText("first name")
    const lastNameInput = screen.getByPlaceholderText("last name")
    const answer = screen.getByTestId("answer")

    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(answer).toBeInTheDocument()
  })

})