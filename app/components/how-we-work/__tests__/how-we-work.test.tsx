import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import HowWeWork from "../HowWeWork";

vi.mock("gsap");

describe("howWeWork component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork />
         </MemoryRouter>
      );
      // Act
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
      expect(blockTitle).toHaveTextContent("Как мы работаем ?");
   });

   test("render block image", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork />
         </MemoryRouter>
      );
      // Act
      const blockImage = screen.getByTestId("how-we-work-image");

      // Assert
      expect(blockImage).toBeInTheDocument();
   });

   test("render how we work list item", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork />
         </MemoryRouter>
      );
      // Act
      const listItems = screen.getAllByTestId("how-we-work-text-list-item");

      // Assert
      for (const el of listItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
