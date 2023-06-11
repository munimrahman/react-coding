import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tableData, setTableData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  //   sorting by active, completed and others
  const sortedTableData = tableData.sort((a, b) => {
    if (a.priority < b.priority) return -1;
    else if (a.priority > b.priority) return 1;
    else return a.name.localeCompare(b.name);
  });

  //   filter by active and completed
  let showTableData;
  if (show === "active") {
    showTableData = sortedTableData.filter(
      (data) => data.status.toLowerCase() === "active"
    );
  } else if (show === "completed") {
    showTableData = sortedTableData.filter(
      (data) => data.status.toLowerCase() === "completed"
    );
  } else {
    showTableData = sortedTableData;
  }

  // handle form data and set table data
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.status = e.target.status.value;
    if (data.status.toLowerCase() === "active") {
      data.priority = 1;
    } else if (data.status.toLowerCase() === "completed") {
      data.priority = 2;
    } else {
      data.priority = 3;
    }
    data.id = Date.now();
    setTableData((preTableData) => [...preTableData, data]);
    e.target.name.value = "";
    e.target.status.value = "";
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          {/* submit form */}
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Status"
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {/* submit form end */}
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {showTableData.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
