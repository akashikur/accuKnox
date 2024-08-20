/* eslint-disable react/prop-types */
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Header = ({ setModalToggle }) => {
  return (
    <div className="flex flex-row justify-between items-center py-7">
      <h1 className="font-semibold text-black text-lg">CNAPP Dashboard</h1>
      <div className="flex gap-x-2 text-gray-4  00">
        <button
          className="border px-2 py-1 rounded-md text-xs text-gray-400"
          onClick={() => setModalToggle((prev) => !prev)}
        >
          Add Widget <AddIcon fontSize="small" />
        </button>
        <button className="border px-2 py-1 rounded-md text-xs text-gray-400">
          <AutorenewIcon fontSize="small" />
        </button>
        <button className="border px-2 py-1 rounded-md text-xs text-gray-400">
          <MoreVertIcon fontSize="small" />
        </button>
        <button className="border-2 px-2 py-1 rounded-md text-xs text-gray-400 flex gap-x-2 items-center border-blue-800">
          <span className="pr-1 border-r-2 border-blue-800">
            <AccessTimeIcon fontSize="small" sx={{ color: "darkblue" }} />
          </span>
          <span className="font-bold text-blue-800">Last 2 Days</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
