import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ServiceListBlock from "../ServiceListBlock";

vi.mock("gsap");
vi.mock("@gsap/react", () => ({
   useGSAP: vi.fn(() => ({
      contextSafe: vi.fn(),
   })),
}));

describe("Services list block component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceListBlock />
         </MemoryRouter>
      );
      // Act

      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
   });

   test("render block heading", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceListBlock />
         </MemoryRouter>
      );
      // Act

      const blockHeading = screen.getByTestId("service-list-block-heading");

      // Assert
      expect(blockHeading).toBeInTheDocument();
   });

   test("render block item images", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceListBlock />
         </MemoryRouter>
      );
      // Act

      const blockItemImages = screen.getAllByTestId("service-list-block-image");

      // Assert
      expect(blockItemImages).toHaveLength(6);
      for (const el of blockItemImages) {
         expect(el).toBeInTheDocument();
      }
   });

   test("render block item label", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceListBlock />
         </MemoryRouter>
      );
      // Act

      const blockItemLabel = screen.getAllByTestId("service-list-block-label");

      // Assert
      expect(blockItemLabel).toHaveLength(6);
      for (const el of blockItemLabel) {
         expect(el).toBeInTheDocument();
      }
   });
});
