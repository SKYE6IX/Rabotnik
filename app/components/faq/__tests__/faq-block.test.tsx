import { test, describe, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Faq from "../Faq";

describe("Faq Component", () => {
   test("renders FAQ section with title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Faq />
         </MemoryRouter>
      );
      // Act
      const faqTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(faqTitle).toBeInTheDocument();
   });
   test("displays all questions", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Faq />
         </MemoryRouter>
      );
      // Act
      const questions = screen.getAllByRole("heading", { level: 4 });

      // Assert
      expect(questions.length).toBeGreaterThan(0);
      for (const question of questions) {
         expect(question).toBeInTheDocument();
      }
   });

   test("toggles answer visibility on question click", async () => {
      // Arrange
      const user = userEvent.setup();
      render(
         <MemoryRouter>
            <Faq />
         </MemoryRouter>
      );

      // Act
      const firstQuestion = screen.getAllByTestId(
         "faq-block-list-item-header"
      )[0];
      //
      const firstAnswer = screen.getAllByTestId(
         "faq-block-list-item-text-wrapper"
      )[0];

      // Assert
      await user.click(firstQuestion);

      expect(firstAnswer).toHaveClass("expand animate_in");

      await user.click(firstQuestion);

      expect(firstAnswer).toHaveClass("collapsed animate_out");
   });
});
