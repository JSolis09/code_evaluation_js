import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./tests/utils";

test("renders correctly", () => {
  const { container } = renderWithProviders(<App />);
  expect(container).toBeInTheDocument();
});

test("renders CurrentStatus component", () => {
  renderWithProviders(<App />);
  const el = screen.getByText(/Current status/i);
  expect(el).toBeInTheDocument();
});
