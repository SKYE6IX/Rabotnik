import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ServiceOverview from "../ServiceOverview";

// TODO: Run test for all cases later

describe("Service overview component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceOverview
               boxTwoTitle="Что такое генерация кадрового трафика?"
               boxTwoText="Это не просто реклама вакансии. Это система привлечения кандидатов по заданным критериям через digital-каналы, автоматизацию и обработку откликов"
               boxThreeText="Мы настраиваем поток валидных лидов с максимальным охватом и персонализацией под специфику вашего бизнеса"
            />
         </MemoryRouter>
      );

      // Acts
      const title = screen.getAllByRole("heading", { level: 3 })[0];

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Примеры кейсов");
   });

   test("render component box2 heading", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceOverview
               boxTwoTitle="Что такое генерация кадрового трафика?"
               boxTwoText="Это не просто реклама вакансии. Это система привлечения кандидатов по заданным критериям через digital-каналы, автоматизацию и обработку откликов"
               boxThreeText="Мы настраиваем поток валидных лидов с максимальным охватом и персонализацией под специфику вашего бизнеса"
            />
         </MemoryRouter>
      );

      // Acts
      const heading = screen.getAllByRole("heading", { level: 3 })[1];

      // Assert
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(
         "Что такое генерация кадрового трафика?"
      );
   });
});
