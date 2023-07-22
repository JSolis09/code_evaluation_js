import { fireEvent, screen } from "@testing-library/react";
import CurrentStatus from "./CurrentStatus";
import { renderWithProviders } from "../../tests/utils";

test("renders correctly", () => {
  const { container } = renderWithProviders(<CurrentStatus />);
  expect(container).toBeInTheDocument();
});

test("status list should has 2 children", () => {
  renderWithProviders(<CurrentStatus />, {
    preloadedState: {
      app: {
        statusList: [
          {
            id: '1',
            text: 'Last reading',
            caption: 'Just now',
          },
          {
            id: '2',
            text: 'HVAC FAN',
            caption: 'active'
          }
        ],
      },
    },
  });
  expect(screen.getByTestId('statusList').childNodes?.length).toEqual(2);
});

test("renders show expand more button if it has scroll", () => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 500 });
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 300 });
  renderWithProviders(<CurrentStatus />);
  const expandMoreEl = screen.getByAltText(/expand more/i);
  expect(expandMoreEl).toBeInTheDocument();
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {});
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {});
});

test('renders expanded icon if it is collapsed', () => {
  renderWithProviders(<CurrentStatus />);
  expect(screen.getByAltText(/Colapsed icon/i)).toBeInTheDocument();
  const button = screen.getByTestId("btn-expand");
  fireEvent.click(button);
  expect(screen.getByAltText(/expanded icon/i)).toBeInTheDocument();
  expect(screen.getByTestId('currentStatus')).toHaveClass('h-currentStatus--collapsed');
});

