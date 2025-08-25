import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import RecruitmentFunnelOffer from "../RecruitmentFunnelOffer";

describe("Recruitment funnel offer component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <RecruitmentFunnelOffer />
         </MemoryRouter>
      );

      // Acts
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
   });
   //                      data-testid="recruitment-funnel-offer-list-item"
   test("render block list item", () => {
      // Arrange
      render(
         <MemoryRouter>
            <RecruitmentFunnelOffer />
         </MemoryRouter>
      );

      // Acts
      const blockListItems = screen.getAllByTestId(
         "recruitment-funnel-offer-list-item"
      );

      // Assert
      expect(blockListItems.length).toBeGreaterThan(0);
      for (const el of blockListItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
