export default function MainSection() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-12" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="breadcrumb-item active nav-link" aria-current="page">
              COLLAGEN PROTEIN
            </li>
          </ol>
        </div>
      </div>

      <div className="row" style={{ background: "blue" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              style={{ background: "yellow", height: "700px" }}
            >
              <div className="row">
                <div
                  className="col-lg-4"
                  style={{ background: "purple", height: "700px" }}
                >
                  <div className="vertical-slick-nav">
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                  </div>
                </div>
                <div
                  className="col-lg-8"
                  style={{ background: "brown", height: "700px" }}
                >
                  <div className="row" style={{ background: "white" }}>
                    AGELESS MULTI-COLLAGEN® PROTEIN POWDER
                  </div>
                  <div className="row">
                    <span class="stars">
                    <i className="fa-solid fa-star" style={{color: "#3ed016;"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#3ed016;"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#3ed016;"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#3ed016;"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#3ed016;"}}></i>
                    <a className="">3239 Reviews</a>
                    </span>
                  </div>
                  <div
                    className="row vertical-slick-for"
                    style={{ background: "yellow", height: "600px" }}
                  ></div>
                  <div className="row" style={{ background: "black" }}>
                    <img src={"https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/free-report-image-1546015359856-1555446388183.png"} alt="Receive two free e-books"></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ background: "green", height: "700px" }}
            >
              <div className="container">
                <div className="row" style={{ background: "purple" }}>
                  hi
                  <p></p>
                </div>
                <div className="row">
                  <div className="col-6" style={{ background: "yellow" }}>
                    hi
                  </div>
                  <div className="col-6" style={{ background: "orange" }}>
                    hi
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-4"
                    style={{ background: "red", height: "400px" }}
                  ></div>
                  <div
                    className="col-4"
                    style={{ background: "blue", height: "400px" }}
                  ></div>
                  <div
                    className="col-4"
                    style={{ background: "gray", height: "400px" }}
                  ></div>
                </div>
                <div className="row">
                  <div className="container">
                    <div
                      className="row"
                      style={{ background: "white", height: "50px" }}
                    ></div>
                    <div
                      className="row"
                      style={{ background: "orange", height: "170px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-ptimary btn-lg"></div>
    </main>
  );
}
