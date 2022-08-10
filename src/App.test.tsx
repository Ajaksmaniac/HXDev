import { render, screen } from "@testing-library/react";
import NavBar from "./components/NavBar";
import "@testing-library/jest-dom";

it("renders NavBar Component", () => {
  render(<NavBar />);

  expect(screen.getByText(/HXDev/i)).toBeVisible();
  expect(screen.getByText(/Projects/i)).toBeVisible();
  expect(screen.getByText(/Experience/i)).toBeVisible();
  expect(screen.getByText(/About/i)).toBeVisible();
});
