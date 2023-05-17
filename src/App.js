import "./App.css";
import React from "react";
import Control from "./component/start-control";
import Liststuden from "./component/start-list-studen";
import Form from "./component/start-form-sv";

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <Liststuden />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <Form />
        {/* END FORM SINH VIÊN */}
      </div>
    );
  }
}

export default App;
