import { test, describe, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from "../ContactUs";

describe("Contant us component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ContactUs />
         </MemoryRouter>
      );
      // Act
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
      expect(blockTitle).toHaveTextContent("Связаться");
   });

   test("render block form title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ContactUs />
         </MemoryRouter>
      );
      // Act
      const blockFormTitle = screen.getByTestId("contact-us-form-title");

      // Assert
      expect(blockFormTitle).toBeInTheDocument();
   });

   test("render block form sub title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ContactUs />
         </MemoryRouter>
      );
      // Act
      const blockFormSubTitle = screen.getByTestId("contact-us-sub-form-title");

      // Assert
      expect(blockFormSubTitle).toBeInTheDocument();
   });

   test("render block form inputs", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ContactUs />
         </MemoryRouter>
      );
      // Act
      const blockFormInputs = screen.getAllByTestId("contact-us-form-input");

      // Assert
      expect(blockFormInputs).toHaveLength(3);
      for (const el of blockFormInputs) {
         expect(el).toBeInTheDocument();
      }
   });

   test("updates controlled input", async () => {
      // Arrange
      render(
         <MemoryRouter>
            <ContactUs />
         </MemoryRouter>
      );
      const user = userEvent.setup();

      // Act
      const nameInput = screen.getByPlaceholderText("Имя");
      const telephoneInput = screen.getByPlaceholderText("Телефон");
      const companyInput = screen.getByPlaceholderText("Компания");

      await user.type(nameInput, "John Doe");
      await user.type(telephoneInput, "1234567890");
      await user.type(companyInput, "ExampleCorp");

      // Assert
      expect(nameInput).toHaveValue("John Doe");
      expect(telephoneInput).toHaveValue("1234567890");
      expect(companyInput).toHaveValue("ExampleCorp");
   });
});
