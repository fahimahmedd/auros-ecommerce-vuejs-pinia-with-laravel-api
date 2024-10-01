<template>
  <v-footer class="footer" app>
    <v-container>
      <div class="footer-wrapper">
        <div class="footer-logo">
          <v-img
            max-width="240"
            class="mx-auto"
            src="../../assets/images/logo/logo.svg"
          ></v-img>
        </div>
        <v-row class="mt-10">
          <v-col lg="3" cols="12">
            <div class="text-h6 secondary-font font-weight-bold">About Us</div>
            <ul>
              <li>
                <router-link to="/">
                  <span class="mdi mdi-map-marker"></span>
                  House - 94 ,Road - 7 , Mirpur - 12 , Dhaka - 1216,
                  Bangladesh</router-link
                >
              </li>
              <li>
                <router-link to="/">
                  <span class="mdi mdi-email"></span>
                  infoaros@gmail.com</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col lg="3" cols="6">
            <div class="text-h6 secondary-font font-weight-bold">INFORMATION</div>
            <ul>
              <li><router-link to="/"> About Us </router-link></li>
              <li><router-link to="/"> Our Guarantee </router-link></li>
              <li><router-link to="/"> Customer Service </router-link></li>
              <li><router-link to="/"> Privacy Policy </router-link></li>
              <li><router-link to="/"> Become an Affiliate </router-link></li>
            </ul>
          </v-col>
          <v-col lg="2" cols="6">
            <div class="text-h6 secondary-font font-weight-bold">Shop</div>
            <ul>
              <li><router-link to="/"> Living Room </router-link></li>
              <li><router-link to="/"> Bedroom </router-link></li>
              <li><router-link to="/"> Business </router-link></li>
              <li><router-link to="/"> Home Office </router-link></li>
              <li><router-link to="/"> Lighting </router-link></li>
              <li><router-link to="/"> Kitchen </router-link></li>
            </ul>
          </v-col>
          <v-col lg="2" cols="6">
            <div class="text-h6 secondary-font font-weight-bold">INFORMATION</div>
            <ul>
              <li><router-link to="/"> About Us </router-link></li>
              <li><router-link to="/"> Our Guarantee </router-link></li>
              <li><router-link to="/"> Customer Service </router-link></li>
              <li><router-link to="/"> Privacy Policy </router-link></li>
              <li><router-link to="/"> Become an Affiliate </router-link></li>
            </ul>
          </v-col>
          <v-col lg="2" cols="6">
            <div class="text-h6 secondary-font font-weight-bold">Help</div>
            <ul>
              <li><router-link to="/"> Live Chat </router-link></li>
              <li><router-link to="/"> Help Center </router-link></li>
              <li><router-link to="/"> Order Status </router-link></li>
              <li><router-link to="/"> Size Chart</router-link></li>
              <li><router-link to="/"> Return & Warranty </router-link></li>
            </ul>
          </v-col>
        </v-row>
      </div>

      <v-row class="footer-info">
        <v-col
          lg="4"
          cols="12"
          class="custom-footer-border mob-border-none d-flex flex-column align-center justify-center text-center"
        >
          <div><span class="mdi mdi-chat-outline"></span></div>
          <div class="text-h6 mt-2 font-weight-bold secondary-font">Need Help?</div>
          <p class="mt-1">Chat with one of our customer service reps.</p>
          <v-btn class="mt-5" color="#000"> Chat Now </v-btn>
        </v-col>
        <v-col
          lg="4"
          cols="6"
          class="custom-footer-border d-flex flex-column align-center justify-center text-center"
        >
          <div><span class="mdi mdi-phone"></span></div>
          <div class="text-h6 mt-2 font-weight-bold secondary-font">
            Call Us <span class="primary-color">+88 01238746354</span>
          </div>
          <p class="mt-1">We are here to answer your question</p>
          <ul class="social-icon">
            <li>
              <a href="#"> <span class="mdi mdi-facebook"></span> </a>
            </li>
            <li>
              <a href="#"> <span class="mdi mdi-instagram"></span> </a>
            </li>
            <li>
              <a href="#"> <span class="mdi mdi-linkedin"></span> </a>
            </li>
          </ul>
        </v-col>
        <v-col
          lg="4"
          cols="6"
          class="d-flex flex-column align-center justify-center text-center"
        >
          <div><span class="mdi mdi-map-marker-outline"></span></div>
          <div class="text-h6 mt-2 font-weight-bold secondary-font">Our Showrooms</div>
          <p class="mt-1">Explore a retail store or outlet near you.</p>
          <v-btn class="mt-5" color="#000"> Showrooms </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="footer-bottom text-center">
      <span class="text-subtitle-2"> All copyright reserved by Fahim Ahmed </span>
    </div>
  </v-footer>
</template>

<script setup></script>

<style scoped lang="scss">
.footer {
  display: inline;
  width: 100%;
  padding: 0;
}
.footer-wrapper {
  padding: 100px 0 80px 0;
}
.footer-bottom {
  // background-color: #e4e4e4;
  padding: 15px 0;
}
.footer-logo {
  margin-bottom: 60px;
}
ul {
  margin-top: 12px;
  li {
    margin-top: 8px;
    a {
      font-size: 15px;
      text-decoration: none;
      color: #505050;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
}

.footer-info {
  height: 300px;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;

  .mdi {
    font-size: 40px;
  }
}
.custom-footer-border {
  border-right: 1px solid #eaeaea;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: inline-block;
    margin: 0 5px;
    height: 35px;
    width: 35px;
    background-color: #f3f3f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--primary-color);
    }
    &:hover .mdi {
      color: #fff;
    }
    .mdi {
      font-size: 20px;
      color: #919090;
      &::before {
        line-height: 0px;
      }
    }
  }
}

@media (min-width: 280px) and (max-width: 960.98px) {
  .mob-border-none {
    border-right: none !important;
  }
  .footer-info {
    height: auto;
  }
}
</style>
