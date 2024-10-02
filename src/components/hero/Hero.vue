<template>
  <v-container class="hero-section d-flex align-center h-screen">
    <div class="hero-lamp position-absolute left-60 zIndex-2">
      <v-img src="../../assets/images/hero/lamp.svg" height="240" width="200"></v-img>
    </div>
    <v-row align="center" class="pa-0">
      <v-col lg="6" cols="12" sm="6" md="6">
        <v-card elevation="0">
          <v-card-item>
            <div class="text-h2 font-weight-black">
              We Help
              <span class="position-relative"
                >To Build
                <v-img
                  width="240"
                  src="../../assets/images/hero/line.svg"
                  class="position-absolute right-0"
                ></v-img>
              </span>
              <br />
              Your Dream Spaces<span class="secondary-color">.</span>
            </div>
            <div class="text-body-1 font-weight-regular mt-4">
              We research, create and build workplaces with the fusion of design,
              technology and innovation. Let our interior architecture team help you
              create a better business.
            </div>
            <v-btn
              append-icon="mdi-cart"
              variant="flat"
              color="primary"
              rounded="lg"
              class="mt-4 m-index-adjust"
            >
              Shop Now
            </v-btn>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col lg="6" cols="12" sm="6" md="6">
        <div class="hero-img position-relative zIndex-2">
          <v-img
            src="../../assets/images/product/brown-coution.png "
            class="mx-auto"
            max-height="400"
            max-width="100%"
          >
          </v-img>
        </div>

        <div class="hero-img-bg"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.hero-section {
  position: relative;
}
.hero-lamp {
  top: -85px;
  left: 170px;
}
.hero-img-bg {
  height: 450px;
  width: 450px;
  position: absolute;
  right: 0;
  bottom: 50px;
  filter: blur(45px);
  transform: translateZ(0);
  z-index: 1;
  background: radial-gradient(#ffbc11b7, rgba(1, 65, 255, 0));
}

@media (min-width: 280px) and (max-width: 757.98px) {
  .text-h2 {
    font-size: 34px !important;
  }
  .hero-lamp {
    height: 220px;
    width: 220px;
    top: -20px;
    right: 0;
    left: auto;
  }
  .hero-img-bg {
    height: 300px;
    width: 240px;
  }
}
@media (min-width: 700px) and (max-width: 960.98px) {
  .hero-img-bg {
    height: 350px;
    bottom: 100px;
    width: 300px;
  }
  .hero-lamp {
    top: -85px;
    left: 100px;
  }
}
@media (min-width: 280px) and (max-width: 380.98px) {
  .hero-lamp {
    height: 100px;
    width: 100px;
    top: -20px;
    right: 0;
    left: auto;
  }
}
</style>
