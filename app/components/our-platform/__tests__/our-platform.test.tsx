import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import OurPlatform from "../OurPlatform";

vi.mock("gsap");
vi.mock("@gsap/react");

describe("Our platform component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
   });

   test("render block heading text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockHeading = screen.getByTestId("our-platform-heading");

      // Assert
      expect(blockHeading).toBeInTheDocument();
   });
   //
   test("render block feature list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockFeatureList = screen.getAllByTestId(
         "our-platform-feature-item"
      );

      // Assert
      expect(blockFeatureList).toHaveLength(4);
      for (const el of blockFeatureList) {
         expect(el).toBeInTheDocument();
      }
   });
   test("render block bottom heading", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockBottomHead = screen.getByTestId("our-platform-bottom-heading");

      // Assert
      expect(blockBottomHead).toBeInTheDocument();
   });

   test("render block bottom content text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockBottomText = screen.getByTestId(
         "our-platform-bottom-content-text"
      );

      // Assert
      expect(blockBottomText).toBeInTheDocument();
   });

   test("render block bottom list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <OurPlatform />
         </MemoryRouter>
      );

      // Act
      const blockBottomList = screen.getAllByTestId(
         "our-platform-bottom-list-item"
      );

      // Assert
      expect(blockBottomList).toHaveLength(4);
      for (const el of blockBottomList) {
         expect(el).toBeInTheDocument();
      }
   });
});
