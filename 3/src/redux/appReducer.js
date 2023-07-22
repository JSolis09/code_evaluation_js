import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDeviceById, getDwellingById, getServiceCompanyById } from '../services/appService';

export const fetchDevicesByCompany = createAsyncThunk(
  "devices/fetchByCompany",
  async (id) => {
    const serviceCompany = await getServiceCompanyById(id);
    const dwellingsPromises = serviceCompany?.dwellings?.map((id) => getDwellingById(id));
    const devices = await Promise.all([...dwellingsPromises]).then((dwellings) => {
      return (async function() {
        const newDevices = [];
        for await (const dwelling of dwellings) {
          const devicesPromises = dwelling.devices?.map((id) => getDeviceById(id));
          await Promise.all([...devicesPromises]).then((allDevices) => {
            allDevices.forEach(({ name, id, status }) => {
              newDevices.push({
                id,
                name,
                dwellingName: dwelling.name,
                dwellingId: dwelling.id,
                status: status,
              });
            });
          })
        }
        return newDevices;
      })();
    });
    return { companyName: serviceCompany.name, devices };
  },
);

const initialState = {
  companyName: "",
  companyId: 123,
  loading: false,
  devices: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevicesByCompany.pending, (state) => {
        state.devices = [];
        state.companyName = "";
        state.loading = true;
      })
      .addCase(fetchDevicesByCompany.fulfilled, (state, { payload }) => {
        state.companyName = payload.companyName;
        state.devices = payload.devices;
        state.loading = false;
      })
      .addCase(fetchDevicesByCompany.rejected, (state) => {
        state.companyName = "false";
        state.devices = [];
        state.loading = false;
      });
  },
});

export default appSlice.reducer;
