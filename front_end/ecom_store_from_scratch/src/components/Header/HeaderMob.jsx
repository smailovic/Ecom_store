import React from 'react';

export default function HeaderMob() {
  return (
    <div>
      <div>
        <div className="wrap-header-mobile">
          {/* <!-- Logo moblie -->		 */}
          <div className="logo-mobile">
            <a href="./">
              <h3 class="text-dark">
                E<span class="text-danger">com</span>
              </h3>{' '}
            </a>
          </div>

          {/* <!-- Icon header --> */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a
              href="example.html"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>

          {/* <!-- Button show menu --> */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </div>
      {/* // <!-- Menu Mobile --> */}
      <div className="menu-mobile">
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
          </li>

          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="example.html" className="flex-c-m p-lr-10 trans-04">
                Help & FAQs
              </a>

              <a href="example.html" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>

              <a href="example.html" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>

              <a href="example.html" className="flex-c-m p-lr-10 trans-04">
                USD
              </a>
            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          <li>
            <a href="./">Home</a>
            {/* <ul className="sub-menu-m">
              <li>
                <a href="index.html">Homepage 1</a>
              </li>
              <li>
                <a href="home-02.html">Homepage 2</a>
              </li>
              <li>
                <a href="home-03.html">Homepage 3</a>
              </li>
            </ul> */}
            <span className="arrow-main-menu-m">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>

          <li>
            <a href="product.html">Shop</a>
          </li>

          <li>
            <a href="./ShoppingCart" className="label1 rs1" data-label1="hot">
              Items
            </a>
          </li>

          {/* <li>
            <a href="./blog">Blog</a>
          </li> */}

          <li>
            <a href="./about">About</a>
          </li>

          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
