export const initialState = {
  categories: [
    {
      id: "category_1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget_1",
          name: "Cloud Accounts",
          type: "chart",
          data: [
            { name: "Connected", value: 2 },
            { name: "Not Connected", value: 2 },
          ],
        },
        {
          id: "widget_2",
          name: "Cloud Account Risk Assessment",
          text: "Some placeholder text for the widget.",
          type: "text",
        },
      ],
    },
  ],
  searchQuery: "",
};
