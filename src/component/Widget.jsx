import { useState } from "react";
import AddWidgetForm from "./AddWidgetForm";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/categoriesSlice";

/* eslint-disable react/prop-types */
const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  if (!widget.widgetTitle) {
    return (
      <div className="h-[230px] bg-white rounded-lg flex justify-center items-center">
        {toggle ? (
          <AddWidgetForm categoryId={categoryId} setToggle={setToggle} />
        ) : (
          <button
            className="rounded-md border px-2 py-1 text-gray-400 font-semibold"
            onClick={() => setToggle((prev) => !prev)}
          >
            + Add Widget
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="h-[230px] bg-white rounded-lg p-3 font-semibold">
      <div className="flex justify-between ">
        <h1>{widget.widgetTitle}</h1>
        <button onClick={handleRemoveWidget}>
          <Close />
        </button>
      </div>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
