/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { addWidget } from "../redux/categoriesSlice";

const AddWidgetForm = ({ categoryId, setToggle }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    if (!widgetName || !widgetText) {
      return;
    }
    const newWidget = {
      id: `widget_${Date.now()}`,
      widgetTitle: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <TextField
        label="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddWidget}>
        + Add Widget
      </Button>
    </div>
  );
};

export default AddWidgetForm;
