import { myAccountDropDownArr } from "../../../../src/utils/dropDownArrays";

export default function navHeader() {
  return (
    <nav className="navbar navbar-expand-lg nav_header">
      <div className="container-fluid">
        <div className="row w-100 align-items-center justify-content-between">
          <div className="col-5 col-lg-5 d-lg-inline d-none">
            <a className="navbar-brand nav-link text-white" href="#">
              <span className="p-2">
                <i
                  className="fa-solid fa-children fa-lg"
                  style={{ color: "#90b4f4" }}
                ></i>
              </span>
              EVERY ORDER CAN HELP END CHILDHOOD
            </a>
          </div>
          <div className="col-lg-auto col-12">
            <div className="row ms-3 justify-content-evenly">
              <div className="col-lg-auto col-4 nav-item text-center">
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="customerSupportDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="p-1">
                      <i
                        className="fa-solid fa-user-gear fa-lg"
                        style={{ color: "#90b4f4" }}
                      ></i>
                    </span>
                    CUSTOMER SUPPORT
                  </a>
                  <ul
                    className="dropdown-menu bg-black w-100 p-2"
                    aria-labelledby="customerSupportDropdown"
                  >
                    <li>
                      <div className="row">
                        <div className="col-12">
                          <h6 className="text-center text-white">
                            HOW CAN WE HELP YOU
                          </h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center text-white">
                          <div className="row">
                            <div className="col-12">
                              <h5 style={{ color: "green" }}>24/7 CHAT</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p>
                                Get help now from Aidan, your BioTRUST product
                                expert
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 text-center">
                              <button className="btn btn-primary">
                                CHAT NOW
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 text-center text-white">
                          <hr />
                          <div className="row">
                            <div className="col-12">
                              <h5 style={{ color: "green" }}>QUESTIONS?</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <p>
                                Get answers by visiting the customer help center
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 text-center">
                              <button className="btn btn-primary">
                                HELP CENTER
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-4 nav-item text-center">
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="myAccountDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="p-1">
                      <i
                        className="fa-solid fa-user fa-lg"
                        style={{ color: "#90b4f4" }}
                      ></i>
                    </span>
                    MY ACCOUNT
                  </a>
                  <ul
                    className="dropdown-menu bg-black"
                    aria-labelledby="myAccountDropdown"
                  >
                    {myAccountDropDownArr.map((item) => {
                      <li>
                        <a className="dropdown-item" href="#">
                          {item}
                        </a>
                      </li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-4 nav-item text-center">
                <a className="nav-link" href="#">
                  <span className="p-1">
                    <img
                      src={
                        "https://bio-img.s3.amazonaws.com/Shopify/global/vip/cart.png"
                      }
                      alt="Cart Logo"
                      width="30rem"
                    />
                  </span>
                  MY CART
                  <span id="no-of-carts">(0)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
