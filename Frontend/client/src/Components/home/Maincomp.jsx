import React from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProducts } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Maincomp = () => {
  //

  const { products } = useSelector((state) => state.getproductsdata);
  // console.log("products",products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
        {/* <Slide/> */}
        <div className="slide_part">
          <div className="left_slide">
            <Slide title="Deal Of The Day" products={products} />
          </div>
          <div className="right_slide">
            <h4>Festive latest launches</h4>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
              alt="rightimg"
            />
            <a href="#">see more</a>
          </div>
        </div>
        <Slide title="Today's Deal" products={products} />
        <div className="center_img">
          <img
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt=""
          />
        </div>
        <Slide title="Best Seller" products={products} />
        <Slide title="UPto 80%" products={products} />
      </div>
    </div>
  );
};

export default Maincomp;
