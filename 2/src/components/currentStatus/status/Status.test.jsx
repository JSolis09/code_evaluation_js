import { render, screen } from "@testing-library/react";
import Status from "./Status";

test("renders correctly without info icon", () => {
  const props = {
    text: "Last reading",
    caption: "just now",
    hasInfo: false,
  };
  render(<Status {...props} />);
  const textEl = screen.getByText(/Last reading/i);
  expect(textEl).toBeInTheDocument();
  const captionEl = screen.getByText(/just now/i);
  expect(captionEl).toBeInTheDocument();
  const infoEl = screen.queryByAltText(/info_logo/i);
  expect(infoEl).not.toBeInTheDocument();
});

test("renders correctly with info icon", () => {
  const props = {
    text: "Last reading",
    caption: "just now",
    hasInfo: true,
  };
  render(<Status {...props} />);
  const textEl = screen.getByText(/Last reading/i);
  expect(textEl).toBeInTheDocument();
  const captionEl = screen.getByText(/just now/i);
  expect(captionEl).toBeInTheDocument();
  const infoEl = screen.getByAltText(/info_logo/i);
  expect(infoEl).toBeInTheDocument();
});

test("renders correctly with h-status--collapsed classname", () => {
  const props = {
    text: "Last reading",
    caption: "just now",
    hasInfo: false,
  };
  render(<Status {...props} />);
  expect(screen.getByTestId('status')).toHaveClass('h-status--collapsed');
});

test("renders correctly with no-radius-top classname", () => {
  const props = {
    text: "Last reading",
    caption: "just now",
    hasInfo: false,
    noBorderRadius: "top"
  };
  render(<Status {...props} />);
  expect(screen.getByTestId('status')).toHaveClass('no-radius-top');
});
