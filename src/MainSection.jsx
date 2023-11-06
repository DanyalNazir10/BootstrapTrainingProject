import SimpleSlider from "./Sliders";
import Cards from "./Cards";
import horizontal_slider_images from "./utils/Horizontal-Slider-Images";
import vertical_slider_images from "./utils/Vertical-Slider-images";

export default function MainSection() {
  return (
    <>
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

      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row w-100">
                <div className="col-lg-4 col-4 vertical-slider">
                  <SimpleSlider
                    style={{ margin: "50px" }}
                    isVertical={true}
                    Slider_images={vertical_slider_images}
                  />
                </div>
                <div className="col-lg-8 col-6">
                  <div className="row justify-content-center text-center">
                    <h3 style={{color: "#33659e"}}>AGELESS MULTI-COLLAGEN® PROTEIN POWDER</h3>
                  </div>
                  <div className="row">
                    <span className="stars text-center">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#3ed016" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#3ed016" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#3ed016" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#3ed016" }}
                      ></i>
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#3ed016" }}
                      ></i>
                      <a style={{textDecoration:"none", color:"#33659e"}}>3239 Reviews</a>
                    </span>
                  </div>
                  <div className="row">
                    <img
                      className="slider-main-img"
                      src="https://www.biotrust.com/cdn/shop/products/Unflavored-4-Delicious-Flavors_1080x.png?v=1657121683"
                    ></img>
                  </div>
                  <div className="row">
                    <img
                      src={
                        "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/free-report-image-1546015359856-1555446388183.png"
                      }
                      alt="Receive two free e-books"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <h3 style={{color: "#33659e"}}>Choose Your Package</h3>
                  <p>Select your money-saving option below:</p>
                </div>
                <div className="row w-100 mb-3">
                  <div className="col-6">
                    <button
                      type="button"
                      class="btn btn-outline btn-lg"
                      style={{
                        color: "#33659e",
                        width: "100%",
                        fontWeight: "bold",
                        border: "2px solid #33659e",
                      }}
                    >
                      One-Time Purchase
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ background: "#33659e", width: "100%" }}
                    >
                      Subscribe & Save 40%
                    </button>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-4">
                    <div
                      class="card text-center rounded-0"
                      style={{ border: "3px solid #33659e" }}
                    >
                      <div
                        class="card-header rounded-0"
                        style={{
                          background: "#33659e",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        MOST POPULAR
                      </div>
                      <div class="card-body">
                        <h3
                          class="card-title"
                          style={{ color: "#33659e", fontSize: "2rem" }}
                        >
                          1 PACK
                        </h3>
                        <h6 class="card-subtitle mb-2 text-muted">
                          Every Four Weeks
                        </h6>
                        <p class="card-text">
                          <del>$49</del>
                          <h3 style={{ color: "#2bb34d", fontSize: "2rem" }}>
                            $29.40 Per Pack
                          </h3>
                          <h5 style={{ color: "red" }}>(Save $19.16)</h5>
                          <h6>+ FREE SHIPPING</h6>
                        </p>
                        <button
                          className="rounded"
                          style={{
                            width: "70%",
                            color: "white",
                            background: "#2bb34d",
                            border: "none",
                            fontWeight: "bold",
                          }}
                        >
                          CHOOSE FLAVOR
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Cards title={"2 PACKS"} save={"39.20"}></Cards>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <Cards title={"3 PACKS"} save={"58.80"}></Cards>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="container">
                    <div className="row text-center">
                      <h6>PHOTOS FROM THE #biotrust COMMUNITY</h6>
                    </div>
                    <div className="row horizontal-slider w-100">
                      <SimpleSlider
                        isVertical={false}
                        Slider_images={horizontal_slider_images}
                      ></SimpleSlider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-ptimary btn-lg rounded-5"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "50px",
          background: "#33659e",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <i class="fa-solid fa-comment" style={{ color: "#ffffff" }}></i> Lets
        Chat
      </button>

      <button className="btn btn-ptimary btn-lg rounded-0"
        style={{
          position: "fixed",
          top: "300px",
          left: "0",
          zIndex: "799",
          background: "#33659e",
          color: "white",
          fontSize: "1rem", 
          transformOrigin: "0 50%",
          transform: "rotate(-90deg) translate(-50%, 50%)"
        }}><i class="fa-solid fa-star fa-xs" style={{color: "#f2f2f3"}}></i> REVIEWS</button>
    </main>
      <hr className="nav-divider m-3 " style={{border: "3px solid #33659e", opacity:"2"}}/>
      </>
  );
}
