import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  categories: [
    {
      id: uuidv4(),
      title: "CSPM Executive Dashboard", // Corrected title spelling
      widgets: [
        {
          id: uuidv4(),
          widgetTitle: "Cloud Account",
          text: "cloud account is created",
        },
        {
          id: uuidv4(),
          widgetTitle: "Cloud Account Risk Assessment",
          text: "cloud account is created",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "CWPP Dashboard",
      widgets: [
        {
          id: uuidv4(),
          widgetTitle: "Top 5 Namespace Specific Alerts",
          text: "cloud account is created",
        },
        {
          id: uuidv4(),
          widgetTitle: "Workload Alerts",
          text: "cloud account is created",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Registry Scan",
      widgets: [
        {
          id: uuidv4(),
          widgetTitle: "Image Risk Assessment",
          text: "cloud account is created",
        },
        {
          id: uuidv4(),
          widgetTitle: "Image Security Issues",
          text: "cloud account is created",
        },
      ],
    },
  ],
  searchQuery: "", // Add searchQuery to the initial state
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget); // 'widgets' should match the key in the state
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Ensure searchQuery is handled in state
    },

    updateCategoryWidgets: (state, action) => {
      const { categoryId, selectedWidgets } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);

      if (category) {
        category.widgets = selectedWidgets;
      }
    },
  },
});

export const {
  addWidget,
  removeWidget,
  setSearchQuery,
  updateCategoryWidgets,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
