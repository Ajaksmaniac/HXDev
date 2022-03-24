import { render, screen } from "@testing-library/react";
import NavBar from "./components/NavBar";
import "@testing-library/jest-dom";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";

it("renders NavBar Component", () => {
  render(<NavBar />);

  expect(screen.getByText(/HXDev/i)).toBeVisible();
  expect(screen.getByText(/Projects/i)).toBeVisible();
  expect(screen.getByText(/Skills/i)).toBeVisible();
  expect(screen.getByText(/About/i)).toBeVisible();
});

// it("Projects page rendered succefuly", async () => {
//   render(<Projects />);

//   expect(await screen.getByText("My Projects")).toBeVisible();
// });

it("checks if router routes to /skills and renders Skills page", () => {
  render(<Skills />);

  expect(screen.getByText(/My Skills/)).toBeVisible();
});

it("checks if router routes to /about and renders About page", () => {
  render(<About />);

  expect(screen.getByText(/About me/)).toBeVisible();
});
