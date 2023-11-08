import {
  shopDropDownArr,
  bioTrustDropDownArr,
} from "../../../../src/utils/dropDownArrays";

export default function navFooter() {
  return (
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
                      {shopDropDownArr.map((item) => (
                        <li>
                          <a className="dropdown-item" href="#">
                            {item}
                          </a>
                        </li>
                      ))}
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
                      {bioTrustDropDownArr.map((item) => {
                        return (
                          <li>
                            <a className="dropdown-item" href="#">
                              {item}
                            </a>
                          </li>
                        );
                      })}
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
                  <i
                    className="fa-solid fa-magnifying-glass fa-lg"
                    style={{ color: "#33659e" }}
                  ></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr className="nav-divider mt-1" />
    </div>
  );
}
