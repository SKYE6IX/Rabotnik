import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../Button";

describe("Button component", () => {
   it("render the right label with the correct background-color", () => {
      // Arrange
      const mockLabel = "TestButton";
      render(
         <MemoryRouter>
            <Button label={mockLabel} color="orange" />
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

   it("render the arrow svg icon", () => {
      // Arrange
      const mockLabel = "TestButton";
      render(
         <MemoryRouter>
            <Button label={mockLabel} color="orange" />
         </MemoryRouter>
      );

      // Act
      const buttonIcon = screen.getByTestId("button-icon");

      // Assert
      expect(buttonIcon).toBeInTheDocument();
   });
});
