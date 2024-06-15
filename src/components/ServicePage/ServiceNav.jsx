import React from 'react';

const ServiceNav = () => {
  return (
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span className="mdi mdi-menu"></span>
      </button>
      <div className="search-field d-none d-xl-block">
        <form className="d-flex align-items-center h-100" action="#">
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <i className="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
          </div>
        </form>
      </div>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown d-none d-md-block">
          <a className="nav-link dropdown-toggle" id="reportDropdown" href="#" data-toggle="dropdown" aria-expanded="false"> Reports </a>
          <div className="dropdown-menu navbar-dropdown" aria-labelledby="reportDropdown">
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-file-pdf mr-2"></i>PDF
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-file-excel mr-2"></i>Excel
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-file-word mr-2"></i>doc
            </a>
          </div>
        </li>
        <li className="nav-item dropdown d-none d-md-block">
          <a className="nav-link dropdown-toggle" id="projectDropdown" href="#" data-toggle="dropdown" aria-expanded="false"> Projects </a>
          <div className="dropdown-menu navbar-dropdown" aria-labelledby="projectDropdown">
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-eye-outline mr-2"></i>View Project
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-pencil-outline mr-2"></i>Edit Project
            </a>
          </div>
        </li>
        <li className="nav-item nav-language dropdown d-none d-md-block">
          <a className="nav-link dropdown-toggle" id="languageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <div className="nav-language-icon">
              <i className="flag-icon flag-icon-us" title="us" id="us"></i>
            </div>
            <div className="nav-language-text">
              <p className="mb-1 text-black">English</p>
            </div>
          </a>
          <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
            <a className="dropdown-item" href="#">
              <div className="nav-language-icon mr-2">
                <i className="flag-icon flag-icon-ae" title="ae" id="ae"></i>
              </div>
              <div className="nav-language-text">
                <p className="mb-1 text-black">Arabic</p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <div className="nav-language-icon mr-2">
                <i className="flag-icon flag-icon-gb" title="gb" id="gb"></i>
              </div>
              <div className="nav-language-text">
                <p className="mb-1 text-black">English</p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item nav-profile dropdown">
          <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <div className="nav-profile-img">
              <img src="assets/images/faces/face28.png" alt="profile" />
            </div>
            <div className="nav-profile-text">
              <p className="mb-1 text-black">Henry Klein</p>
            </div>
          </a>
          <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
            <div className="p-3 text-center bg-primary">
              <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/images/faces/face28.png" alt="avatar" />
            </div>
            <div className="p-2">
              <h5 className="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
              <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                <span>Inbox</span>
                <span className="p-0">
                  <span className="badge badge-primary">3</span>
                  <i className="mdi mdi-email-open-outline ml-1"></i>
                </span>
              </a>
              <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                <span>Profile</span>
                <span className="p-0">
                  <span className="badge badge-success">1</span>
                  <i className="mdi mdi-account-outline ml-1"></i>
                </span>
              </a>
              <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="javascript:void(0)">
                <span>Settings</span>
                <i className="mdi mdi-settings"></i>
              </a>
              <div role="separator" className="dropdown-divider"></div>
              <h5 className="dropdown-header text-uppercase pl-2 text-dark mt-2">Actions</h5>
              <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                <span>Lock Account</span>
                <i className="mdi mdi-lock ml-1"></i>
              </a>
              <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#">
                <span>Log Out</span>
                <i className="mdi mdi-logout ml-1"></i>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <i className="mdi mdi-email-outline"></i>
            <span className="count-symbol bg-success"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
            <h6 className="p-3 mb-0 bg-primary text-white py-4">Messages</h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face4.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                <p className="text-gray mb-0"> 1 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face2.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                <p className="text-gray mb-0"> 15 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face3.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                <p className="text-gray mb-0"> 18 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <h6 className="p-3 mb-0 text-center">4 new messages</h6>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i className="mdi mdi-bell-outline"></i>
            <span className="count-symbol bg-danger"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <h6 className="p-3 mb-0 bg-primary text-white py-4">Notifications</h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face4.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Mark send you a message</h6>
                <p className="text-gray ellipsis mb-0"> 1 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face2.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Cregh send you a message</h6>
                <p className="text-gray ellipsis mb-0"> 15 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="assets/images/faces/face3.jpg" alt="face" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Profile picture updated</h6>
                <p className="text-gray ellipsis mb-0"> 18 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <h6 className="p-3 mb-0 text-center">4 new messages</h6>
          </div>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="mdi mdi-menu"></span>
      </button> */}
    </div>
  );
};

export default ServiceNav;