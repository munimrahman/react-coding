import React, { useEffect, useState } from "react";
import {
  useGetAllContactsQuery,
  useGetUsContactsQuery,
} from "../features/contacts/contactsApi";

const Problem2 = () => {
  const [allEven, setAllEven] = useState(false);
  const [usEven, setUsEven] = useState(false);

  const { data: allContact, isLoading } = useGetAllContactsQuery();
  const { data: usContact, isLoading: isUsContactLoading } =
    useGetUsContactsQuery();

  let allFiltered;

  if (allEven) {
    allFiltered = allContact?.results.filter((contact) => contact.id % 2 === 0);
  } else {
    allFiltered = allContact?.results;
  }

  let usFiltered;

  if (usEven) {
    usFiltered = usContact?.results.filter((contact) => contact.id % 2 === 0);
  } else {
    usFiltered = usContact?.results;
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#allContactsModal"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#usContactsModal"
          >
            US Contacts
          </button>
        </div>
      </div>
      {/* all contact modal */}
      <div
        className="modal fade modal-lg"
        id="allContactsModal"
        tabIndex="-1"
        aria-labelledby="allContactsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="allContactsModalLabel">
                All Contacts
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {allFiltered?.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.phone}</td>
                      <td>{item.country.name}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#contactDetailsModal"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="allEven"
                  onClick={() => setAllEven(!allEven)}
                />
                <label className="form-check-label" htmlFor="allEven">
                  Only Even
                </label>
              </div>
              <div>
                <button type="button" className="btn btn-primary">
                  All Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#usContactsModal"
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* us contacts modal */}
      <div
        className="modal fade modal-lg"
        id="usContactsModal"
        tabIndex="-1"
        aria-labelledby="usContactsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="usContactsModalLabel">
                US Contacts
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {usFiltered?.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.phone}</td>
                      <td>{item.country?.name}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#contactDetailsModal"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="usEven"
                  onClick={() => setUsEven(!usEven)}
                />
                <label className="form-check-label" htmlFor="usEven">
                  Only Even
                </label>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#allContactsModal"
                >
                  All Contacts
                </button>
                <button type="button" className="btn btn-primary mx-2">
                  US Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact details modal */}
      <div
        className="modal fade"
        id="contactDetailsModal"
        tabIndex="-1"
        aria-labelledby="contactDetailsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="contactDetailsModalLabel">
                Contact Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>Contact Detail Here</h1>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#allContactsModal"
              >
                All Contacts
              </button>
              <button type="button" className="btn btn-primary">
                US Contacts
              </button> */}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
