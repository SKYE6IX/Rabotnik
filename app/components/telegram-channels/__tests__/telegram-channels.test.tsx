import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TelegramChannels from "../TelegramChannels";

describe("Telegram Channels component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <TelegramChannels />
         </MemoryRouter>
      );

      // Acts
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Telegram каналы Rabotnik");
   });

   test("render component link with title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <TelegramChannels />
         </MemoryRouter>
      );

      // Acts
      const linksList = screen.getAllByTestId("telegram-channel-link");

      // Assert
      expect(linksList.length).toBeGreaterThan(0);
      for (const el of linksList) {
         expect(el).toBeInTheDocument();
      }
   });
});
