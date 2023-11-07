
export default function mainImage(){
    return(

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
            <a className="nav-link d-inline" style={{color:"#33659e"}}>3239 Reviews</a>
          </span>
        </div>
        <div className="row slider-main-img-div" style={{height: "500px"}}>
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
    )
}