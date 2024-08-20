/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryWidgets } from "../redux/categoriesSlice";

const Modal = ({ setModalToggle }) => {
  const categories = useSelector((state) => state.categories.categories);
  const [toggleTab, setToggleTab] = useState(null);
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const dispatch = useDispatch();

  function hanldeSubmit() {
    const currentCategory = categories.find((cat) => cat.id === toggleTab);
    if (currentCategory) {
      const updatedWidgets = currentCategory.widgets.filter((widget) =>
        selectedWidgets.includes(widget.id)
      );
      dispatch(
        updateCategoryWidgets({
          categoryId: toggleTab,
          selectedWidgets: updatedWidgets,
        })
      );
      setModalToggle(false);
    }
  }

  const handleCheckboxChange = (widgetId) => {
    if (selectedWidgets.includes(widgetId)) {
      setSelectedWidgets(selectedWidgets.filter((id) => id !== widgetId));
    } else {
      setSelectedWidgets([...selectedWidgets, widgetId]);
    }
  };

  return (
    <div className="absolute top-0 right-0 h-screen w-1/2 bg-white flex flex-col justify-between">
      <div>
        <div className="bg-blue-800 px-3 py-2 text-white flex justify-between">
          <h1>Add Widget</h1>
          <div
            onClick={() => setModalToggle((prev) => !prev)}
            className="cursor-pointer"
          >
            <Close />
          </div>
        </div>
        <p className="p-3">
          personalise your dashboard by adding the following widget
        </p>
        <div className="flex ">
          {categories.map((categorie) => (
            <div key={categorie} className=" border-b-2 ">
              <div
                className={`py-2 px-6 cursor-pointer hover:border-b-2 border-blue-800 translate-y-[2px] ${
                  toggleTab === categorie.id
                    ? "text-blue-800 border-b-2 border-blue-800 translate-y-[2px]"
                    : ""
                }`}
                onClick={() => setToggleTab(categorie.id)}
              >
                {categorie.title.split(" ")[0]}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex flex-col gap-y-3">
          {categories.map((categorie) =>
            categorie.id === toggleTab
              ? categorie.widgets.map((item) => (
                  <div
                    key={item.id}
                    className="px-3 py-2 border flex justify-start items-center gap-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={item.widgetTitle}
                      checked={selectedWidgets.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <p>{item.widgetTitle}</p>
                  </div>
                ))
              : ""
          )}
        </div>
      </div>
      <div className="flex gap-x-4 self-end p-6">
        <button
          className="border border-blue-900 text-blue-900 px-5 py-1 rounded-lg"
          onClick={() => setModalToggle((prev) => !prev)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-900 text-white px-5 py-1 rounded-lg"
          onClick={hanldeSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
