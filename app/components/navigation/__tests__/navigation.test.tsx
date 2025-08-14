import { test, describe, vi, expect } from "vitest";
import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

vi.mock("gsap");
vi.mock("@gsap/react");

describe("Navigation component", () => {
   test("it render logo image", () => {
      // Arrange
      const Stub = createRoutesStub([
         {
            path: "/",
            Component: Navigation,
         },
      ]);
      render(<Stub initialEntries={["/"]} />);

      // Act
      const logoImage = screen.getByTestId("navigation-logo-image");

      // Assert
      expect(logoImage).toBeInTheDocument();
   });

   test("it render menu item list", () => {
      // Arrange
      const Stub = createRoutesStub([
         {
            path: "/",
            Component: Navigation,
         },
      ]);
      render(<Stub initialEntries={["/"]} />);

      // Act
      const menuItems = screen.getAllByTestId("navigation-menu-item");

      // Assert
      for (const el of menuItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
