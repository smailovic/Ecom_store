import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      {/* <!-- Title page --> */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <h2 className="ltext-105 cl0 txt-center">About</h2>
      </section>
      {/* <!-- Content page --> */}
      <section class="bg0 p-t-75 p-b-120">
        <div class="container">
          <div class="row p-b-148">
            <div class="col-md-7 col-lg-8">
              <div class="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 class="mtext-111 cl2 p-b-16">Our Story</h3>

                <p class="stext-113 cl6 p-b-26">
                  At Ecom, we believe that fashion should be accessible to
                  everyone. Our story began with a simple mission: to create an
                  online store that offers high-quality, stylish clothing and
                  accessories at affordable prices. We started out small, with
                  just a handful of products and a passion for fashion. But as
                  word spread about our commitment to quality and affordability,
                  our customer base began to grow. Today, we are proud to offer
                  a wide range of clothing and accessories for men and women,
                  including everything from casual wear to formal attire. We
                  source our products from the best manufacturers around the
                  world, ensuring that every item we sell is made with care and
                  attention to detail. At Ecom, we believe that customer
                  satisfaction is key. That's why we offer free shipping on all
                  orders, and a no-questions-asked return policy. We want every
                  customer to feel confident and satisfied with their purchase,
                  and we will do whatever it takes to make that happen. So
                  whether you're looking for a new outfit for work, a special
                  occasion, or just everyday wear, Ecom has you covered. Shop
                  with us today and experience the difference that quality and
                  affordability can make. Contact us at +212648075134 to learn
                  more about our products and services. We can't wait to hear
                  from you!
                </p>

                <p class="stext-113 cl6 p-b-26"></p>

                <p class="stext-113 cl6 p-b-26">
                  Any questions? Let us know. We're here to help. Email us at
                  smaelcv@gmail.com or call us at +212648075134
                </p>
              </div>
            </div>

            <div class="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div class="how-bor1 ">
                <div class="hov-img0">
                  <img src="images/about-01.jpg" alt="IMG"></img>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div class="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 class="mtext-111 cl2 p-b-16">Our Mission</h3>

                <p class="stext-113 cl6 p-b-26">
                  At Ecom, our mission is to make fashion accessible to
                  everyone. We believe that looking good shouldn't come with a
                  high price tag, and we're committed to offering high-quality
                  clothing and accessories at affordable prices. We believe that
                  fashion should be fun and inclusive, and we're passionate
                  about helping our customers find their own unique style.
                  Whether you're a trendsetter or a classic dresser, we have
                  something for everyone. We're also committed to sustainability
                  and ethical manufacturing practices. We work with suppliers
                  who share our values, and we're constantly looking for ways to
                  reduce our environmental impact. We believe that fashion can
                  be both stylish and responsible, and we're proud to be part of
                  the movement towards more sustainable fashion practices. At
                  Ecom, we're more than just an online store. We're a community
                  of fashion lovers who believe that everyone deserves to look
                  and feel their best. Shop with us today and experience our
                  commitment to quality, affordability, and sustainability.
                  Contact us at +212648075134 to learn more about our mission
                  and our products. We can't wait to hear from you!
                </p>

                <div class="bor16 p-l-29 p-b-9 m-t-22">
                  <p class="stext-114 cl6 p-r-40 p-b-11">
                    "Make it work, make it better, make it affordable."
                  </p>

                  <span class="stext-111 cl8">- Elon Musk</span>
                </div>
              </div>
            </div>

            <div class="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div class="how-bor2">
                <div class="hov-img0">
                  <img src="images/about-02.jpg" alt="IMG"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
