import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import WorkStage from "../WorkStage";

const mockList = ["item 1", "item 2", "item 3"];

describe("Work stage component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <WorkStage list={mockList} />
         </MemoryRouter>
      );

      // Acts
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Этапы работы");
   });

   //    work-stage-step
   test("render component work stage step list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <WorkStage list={mockList} />
         </MemoryRouter>
      );

      // Acts
      const workStageSteps = screen.getAllByTestId("work-stage-step");

      // Assert
      expect(workStageSteps.length).toBeGreaterThan(0);
      for (const el of workStageSteps) {
         expect(el).toBeInTheDocument();
      }
   });
});
