import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import logo from "../../../assets/logo.svg";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Video giới thiệu trang web</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="99%"
              height="420px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <img
              className="chantrang-logo luoi"
              width="200"
              height="44"
              src={logo}
            />
            <br />
            <b>Công ty Cổ phần Công nghệ BookingCare </b>
            <br />
            <i>
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
              Giấy, Thành phố Hà Nội, Việt Nam
            </i>
            <br />
            <i>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</i>
            <br />
            <br />
            <b>Trụ sở tại Hà Nội</b>
            <br />
            <i>
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
              Giấy, Thành phố Hà Nội, Việt Nam
            </i>
            <br />
            <br />
            <b>Văn phòng tại TP Hồ Chí Minh</b>
            <br />
            <i>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</i>
            <br />
            <br />
            <b>Hỗ trợ khách hàng</b>
            <br />
            <i>support@bookingcare.vn (7h - 18h)</i>

            <br />
            <br />
            <b>Hotline</b>
            <br />
            <i>024-7301-2468 (7h - 18h)</i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
