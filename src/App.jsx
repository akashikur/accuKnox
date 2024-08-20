import { useState } from "react";
import Dashboard from "./component/Dashboard";
import Modal from "./component/Modal";

const App = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div>
      <Dashboard setModalToggle={setModalToggle} />
      {modalToggle && <Modal setModalToggle={setModalToggle} />}
    </div>
  );
};

export default App;
