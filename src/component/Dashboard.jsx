/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Widget from "./Widget";
import { NotificationAdd, Search } from "@mui/icons-material";
import { setSearchQuery } from "../redux/categoriesSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = ({ setModalToggle }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const searchQuery = useSelector((state) => state.categories.searchQuery);

  let filteredCategories = searchQuery
    ? categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
          widget.widgetTitle.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
    : categories;

  function handleChange(e) {
    dispatch(setSearchQuery(e.target.value));
  }
  return (
    <div className="bg-blue-50 h-full">
      <div className="flex flex-row justify-around items-center bg-white py-2">
        <div>
          <p>
            Home {">"}
            <span className="font-semibold text-blue-900">Dashboard</span>
          </p>
        </div>
        <div className="bg-blue-50 rounded-md flex w-1/3 px-2 items-center">
          <Search sx={{ color: "gray" }} fontSize="small" />
          <input
            type="text"
            placeholder="search anything..."
            className="border-none outline-none bg-blue-50 w-full rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-x-5">
          <NotificationAdd sx={{ color: "gray" }} fontSize="small" />
          <AccountCircleIcon sx={{ color: "gray" }} fontSize="small" />
        </div>
      </div>
      <div className="px-8 pb-12">
        <Header setModalToggle={setModalToggle} />
        <div className="flex flex-col gap-y-3">
          {filteredCategories.map((categorie, index) => (
            <div key={index} className="flex flex-col gap-y-5">
              <h2 className="font-semibold">{categorie.title}</h2>
              <div className="bg-gray-400 grid grid-cols-3 gap-x-3 p-4 rounded-lg gap-y-2">
                {categorie.widgets.map((widget, index) => (
                  <Widget
                    widget={widget}
                    key={index}
                    categoryId={categorie.id}
                  />
                ))}
                <Widget widget={"No Data"} categoryId={categorie.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
