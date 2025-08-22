import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from "../Button";

describe("Button component", () => {
   test("render the right label with the correct background-color", () => {
      // Arrange
      const mockLabel = "TestButton";
      render(
         <MemoryRouter>
            <Button label={mockLabel} color="orange" type="link" />
         </MemoryRouter>
      );

      // Act
      const button = screen.getByRole("button");
      const buttonText = screen.getByTestId("button-text");

      // Assert
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("orange");
      expect(buttonText).toHaveTextContent(mockLabel);
   });

   test("render the arrow svg icon", () => {
      // Arrange
      const mockLabel = "TestButton";
      render(
         <MemoryRouter>
            <Button label={mockLabel} color="orange" type="link" />
         </MemoryRouter>
      );

      // Act
      const buttonIcon = screen.getByTestId("button-icon");

      // Assert
      expect(buttonIcon).toBeInTheDocument();
   });
});
