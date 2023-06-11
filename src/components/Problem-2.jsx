import React from "react";

const Problem2 = () => {
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
        class="modal fade"
        id="allContactsModal"
        tabindex="-1"
        aria-labelledby="allContactsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="allContactsModalLabel">
                All Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Hello World</p>
              <button
                className="btn btn-lg btn-outline-warning"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#contactDetailsModal"
              >
                Contact 1
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                All Contacts
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#usContactsModal"
              >
                US Contacts
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* us contacts modal */}
      <div
        class="modal fade"
        id="usContactsModal"
        tabindex="-1"
        aria-labelledby="usContactsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="usContactsModalLabel">
                US Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Hello World</p>
              <button
                className="btn btn-lg btn-outline-warning"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#contactDetailsModal"
              >
                Contact 1
              </button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#allContactsModal"
              >
                All Contacts
              </button>
              <button type="button" class="btn btn-primary">
                US Contacts
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* contact details modal */}
      <div
        class="modal fade"
        id="contactDetailsModal"
        tabindex="-1"
        aria-labelledby="contactDetailsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="contactDetailsModalLabel">
                Contact Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h1>Contact Detail Here</h1>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#allContactsModal"
              >
                All Contacts
              </button>
              <button type="button" class="btn btn-primary">
                US Contacts
              </button> */}
              <button
                type="button"
                class="btn btn-secondary"
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
