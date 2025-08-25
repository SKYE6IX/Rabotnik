import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ChannelOverview from "../ChannelOverview";

const mockList = ["list 1", "list 2", "list 3"];

describe("Channel overview component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ChannelOverview title="Используемые каналы:" list={mockList} />
         </MemoryRouter>
      );

      // Act
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Используемые каналы:");
   });

   test("render component list item texts", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ChannelOverview title="Используемые каналы:" list={mockList} />
         </MemoryRouter>
      );

      // Act
      const listItemText = screen.getAllByTestId(
         "channel-overview-list-item-text"
      );

      // Assert
      expect(listItemText.length).toBeGreaterThan(0);
      for (const el of listItemText) {
         expect(el).toBeInTheDocument();
      }
   });
});
