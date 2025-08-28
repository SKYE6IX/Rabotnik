import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import CreativeSlider from "../CreativeSlider";

vi.mock("@gsap/react");

describe("Creative Ads Component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <CreativeSlider />
         </MemoryRouter>
      );

      // Acts
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Наши креативы");
   });

   test("render component image list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <CreativeSlider />
         </MemoryRouter>
      );

      // Acts
      const creativeAdsImages = screen.getAllByTestId("creative-ads-image");

      // Assert
      expect(creativeAdsImages.length).toBeGreaterThan(0);
      for (const el of creativeAdsImages) {
         expect(el).toBeInTheDocument();
      }
   });
});
