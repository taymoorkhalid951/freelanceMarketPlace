import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceService from "../services/serviceService";

// Async thunks for services
export const createService = createAsyncThunk(
  "services/create",
  async (serviceData, { rejectWithValue }) => {
    try {
      return await serviceService.createService(serviceData);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create service");
    }
  }
);

export const fetchServices = createAsyncThunk(
  "services/fetchAll",
  async (params, { rejectWithValue }) => {
    try {
      return await serviceService.getServices(params);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch services");
    }
  }
);

export const fetchServiceById = createAsyncThunk(
  "services/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      return await serviceService.getServiceById(id);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch service");
    }
  }
);

export const fetchServciesByUserId = createAsyncThunk(
  "services/fetchByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      return await serviceService.getServicesByUserId(userId);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch services");
    }
  }
);

export const updateService = createAsyncThunk(
  "services/update",
  async ({ id, serviceData }, { rejectWithValue }) => {
    try {
      return await serviceService.updateService(id, serviceData);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update service");
    }
  }
);

export const deleteService = createAsyncThunk(
  "services/delete",
  async (id, { rejectWithValue }) => {
    try {
      return await serviceService.deleteService(id);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete service");
    }
  }
);

const initialState = {
  services: [],
  currentService: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    pages: 1,
    total: 0,
  },
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentService: (state) => {
      state.currentService = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create service cases
      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.services.unshift(action.payload);
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch services cases
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.page && action.meta.arg.page > 1) {
          state.services = [...state.services, ...action.payload.services];
        } else {
          state.services = action.payload.services;
        }
        state.pagination = {
          page: action.payload.page,
          pages: action.payload.pages,
          total: action.payload.total,
        };
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch single service cases
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchServciesByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServciesByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload.services || action.payload;
        if (action.payload.page) {
          state.pagination = {
            page: action.payload.page,
            pages: action.payload.pages,
            total: action.payload.total,
          };
        }
      })
      .addCase(fetchServciesByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update service cases
      .addCase(updateService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.loading = false;
        state.currentService = action.payload;
        const index = state.services.findIndex(
          (s) => s._id === action.payload._id
        );
        if (index !== -1) {
          state.services[index] = action.payload;
        }
      })
      .addCase(updateService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete service cases
      .addCase(deleteService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = state.services.filter(
          (service) => service._id !== action.payload._id
        );
        state.currentService = null;
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCurrentService } = serviceSlice.actions;
export default serviceSlice.reducer;
