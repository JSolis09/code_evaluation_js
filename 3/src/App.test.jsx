import { screen } from '@testing-library/react';
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from './tests/utils';
import App from './App';

export const handlers = [
  rest.get('http://localhost:8080/service_company/:id', (req, res, ctx) => {
    const data = {
      id: 1,
      name: 'Company test',
      address: '431 Boulevard Henri-Bourassa Est',
      dwellings: [10],
    };
    return res(ctx.json(data), ctx.delay(150));
  }),
  rest.get('http://localhost:8080/dwelling/:id', (req, res, ctx) => {
    const data = {
      id: 10,
      name: 'Dwelling Name',
      address: '1344 Boulevard Henri-Bourassa Est',
      devices: [101],
    };
    return res(ctx.json(data), ctx.delay(200));
  }),
  rest.get('http://localhost:8080/device/:id', (req, res, ctx) => {
    const data = {
      id: 101,
      name: 'Device Test',
      install_timestamp: new Date().toTimeString(),
      status: 'active',
      install_location: 1,
    };
    return res(ctx.json(data), ctx.delay(100));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('renders Fetching devices when it is loading', () => {
  renderWithProviders(<App />);
  const loadingEl = screen.getByText(/Fetching devices/i);
  expect(loadingEl).toBeInTheDocument();
});

test('renders company name and its devices', async () => {
  renderWithProviders(<App />, {
    preloadedState: {
      app: {
        companyId: 123,
      },
    },
  });
  const companyEl = await screen.findByText(/Company test/i);
  expect(companyEl).toBeInTheDocument();
  const devicesEl = await screen.findByText(/Device Test - Dwelling Name/i);
  expect(devicesEl).toBeInTheDocument();
});
