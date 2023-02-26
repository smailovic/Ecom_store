import React from 'react';
import './headerstyle.css';

export default function HeaderDsk() {
  return (
    // <!-- Header desktop -->
    <div className="container-menu-desktop">
      {/* <!-- Topbar --> */}
      <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
          <div className="left-top-bar">
            Free shipping for standard order over $100
          </div>

          <div className="right-top-bar flex-w h-full">
            <a href="placeHolder.html" className="flex-c-m trans-04 p-lr-25">
              Help & FAQs
            </a>

            <a href="placeHolder.html" className="flex-c-m trans-04 p-lr-25">
              My Account
            </a>

            <a href="placeHolder.html" className="flex-c-m trans-04 p-lr-25">
              EN
            </a>

            <a href="placeHolder.html" className="flex-c-m trans-04 p-lr-25">
              USD
            </a>
          </div>
        </div>
      </div>

      <div className="stay  wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">
          {/* <!-- Logo desktop -->		 */}
          <a href="./" className="logo">
            <h3 class="text-dark">
              E<span class="text-danger">com</span>
            </h3>
          </a>

          {/* <!-- Menu desktop --> */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li className="active-menu">
                <a href="./">Home</a>
              </li>

              <li>
                <a href="./Shop">Shop</a>
              </li>

              <li className="label1" data-label1="hot">
                <a href="./ShoppingCart">Items</a>
              </li>
              {/* 
              <li>
                <a href="blog.html">Blog</a>
              </li> */}

              <li>
                <a href="./about">About</a>
              </li>

              <li>
                <a href="./contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* <!-- Icon header --> */}
          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a
              href="contact.html"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
