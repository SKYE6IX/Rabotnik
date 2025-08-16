import { describe, expect, test, vi } from "vitest";
import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import MetricsBlock from "../MetricsBlock";

vi.mock("@gsap/react");
vi.mock("gsap");

describe("Metrics block component", () => {
   test("render metric number", () => {
      // Arrange
      const Stub = createRoutesStub([
         {
            path: "/",
            Component: MetricsBlock,
         },
      ]);

      render(<Stub initialEntries={["/"]} />);

      // Act
      const metricNumber = screen.getAllByTestId("metric-number");

      // Assert
      expect(metricNumber).toHaveLength(4);
      for (const el of metricNumber) {
         expect(el).toBeInTheDocument();
      }
   });

   test("render metric label", () => {
      // Arrange
      const Stub = createRoutesStub([
         {
            path: "/",
            Component: MetricsBlock,
         },
      ]);

      render(<Stub initialEntries={["/"]} />);

      // Act
      const metricLabel = screen.getAllByTestId("metric-label");

      // Assert
      expect(metricLabel).toHaveLength(4);
      for (const el of metricLabel) {
         expect(el).toBeInTheDocument();
      }
   });
});
