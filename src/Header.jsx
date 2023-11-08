import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg nav_header">
        <div className="container-fluid">
          <div className="row w-100 align-items-center justify-content-between">
            <div className="col-5 col-lg-5 d-lg-inline d-none">
              <a className="navbar-brand nav-link text-white" href="#">
                <span className="p-2">
                  <i
                    class="fa-solid fa-children fa-lg"
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
                                  Get answers by visiting the customer help
                                  center
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
                      <li>
                        <a className="dropdown-item" href="#">
                          Purchase History
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Manage Subscriptions
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Track My Order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Forget Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Make Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Customer Support
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Login
                        </a>
                      </li>
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

      <div className="container-fluid nav-footer align-items-center">
        <div className="row w-100 align-items-center justify-content-between">
          <div className="col">
            <div className="row align-items-center gx-5">
              <div className="col-lg-3 col-10">
                <img
                  src={
                    "https://www.biotrust.com/cdn/shop/files/naturally-honest_911b83fb-85cd-42d6-8bc9-aab9bb97abb8_540x.png?v=1674668138"
                  }
                  alt="Brand Logo"
                  width="200rem"
                />
              </div>

              <div className="col-1 d-lg-none collapse-menu text-end">
                <button
                  className="navbar-toggler"
                  id="menuCollapseButton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menuCollapse"
                  aria-expanded="false"
                  aria-controls="menuCollapse"
                >
                  <i className="fa-solid fa-bars fa-2xl"></i>
                </button>
              </div>

              <div className="col-1 d-lg-none d-block collapse-search text-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#searchCollapse"
                  aria-expanded="false"
                  aria-controls="searchCollapse"
                >
                  <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
                </button>
              </div>

              <div className="col-auto collapse d-lg-block" id="menuCollapse">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <div className="dropdown shopDropdown">
                      <a
                        className="dropdown-toggle nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SHOP
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="shopDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            ALL PRODUCTS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            PROTEIN
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            COLLAGEN PROTEIN
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            IMMUNE SUPPORT
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            HEALTHY LIVING
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            DIGESTIVE HEALTH
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            ANTI-AGING
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            GEAR
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a className="nav-link" href="# ">
                      QUALITY
                    </a>
                  </div>
                  <div className="col-auto">
                    <a className="nav-link" href="# ">
                      MISSION
                    </a>
                  </div>

                  <div className="col-auto">
                    <div className="dropdown bioTrustDropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        id="bioTrustTagDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        #BIOTRUST
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="bioTrustTagDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            OUR STORY
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            OUR COACHES
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            INSTAGRAM
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            FACEBOOK
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            RECIPES
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            NEUTRITION
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            FITNESS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            LIFESTYLE
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            VIDEOS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-lg-block collapse" id="searchCollapse">
            <form action="/" method="GET">
              <div className="input-group rounded">
                <input
                  type="search"
                  name="search"
                  className="form-control rounded ms-1 ps-1"
                  placeholder="Search all products..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                />

                <div className="input-group-append">
                  <button type="submit" className="btn" id="search-btn">
                    <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="nav-divider mt-1" />
      </div>
    </header>
  );
}
