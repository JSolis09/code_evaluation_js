import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    },
    {
      id: '3',
      text: 'Indoor PM2.5',
      caption: 'Good',
      variant: 'success',
      hasInfo: true,
    },
    {
      id: '4',
      text: 'Indoor tVOC',
      caption: 'Poor',
      variant: 'error',
      hasInfo: true,
    },
    {
      id: '5',
      text: 'Indoor Dew Point',
      caption: '55°F',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'bottom',
    },
    {
      id: '6',
      text: 'Outdoor  Dew Point',
      caption: '64°F',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'top',
    },
    {
      id: '7',
      text: 'Indoor RH',
      caption: '41.9%',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'bottom',
    },
    {
      id: '8',
      text: 'Outdoor RH',
      caption: '74.2%',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'top',
    },
    {
      id: '9',
      text: 'Indoor Temp',
      caption: '60.6°F',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'bottom',
    },
    {
      id: '10',
      text: 'Outdoor Temp',
      caption: '73.6°F',
      variant: 'measurement',
      hasInfo: true,
      noBorderRadius: 'top',
    },
    {
      id: '11',
      text: 'Outdoor AQI',
      caption: 'Fair',
      variant: 'warning',
      hasInfo: true,
    },
  ],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
