import React from 'react';

export default function ModalSearch() {
  return (
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
          <img src="images/icons/icon-close2.png" alt="CLOSE"></img>
        </button>

        <form className="wrap-search-header flex-w p-l-15">
          <button className="flex-c-m trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
          ></input>
        </form>
      </div>
    </div>
  );
}
