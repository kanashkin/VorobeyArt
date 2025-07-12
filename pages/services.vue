<template>
  <div class="services">
    <Head>
      <Title>Услуги</Title>
      <Meta
        name="description"
        content="Команда, креатив которой не знает границ. Наши дизайнерские решения
          покоряют сердца, а технические навыки позволяют реализовывать самые
          смелые идеи."
      />
    </Head>
    <img
      src="/img/about/feather.png"
      alt=""
      class="services__decor services__decor--1"
    />
    <img
      src="/img/about/feather.png"
      alt=""
      class="services__decor services__decor--2"
    />
    <div class="content services-text">
      <div class="content__wrapper services-text__wrapper">
        <p class="services-text__title" v-html="$t('services.tagline')"></p>
      </div>
    </div>
    <div class="content services-groups">
      <div class="content__wrapper">
        <div class="services-groups__wrapper">
          <div
            class="services-group"
            v-for="(service, index) in services"
            :key="index"
          >
            <div class="services-group__header">
              <div class="services-group__row">
                <p class="services-group__number">/0{{ index + 1 }}</p>
                <p class="services-group__title">
                  {{ service.title }}
                </p>
              </div>
            </div>
            <ul class="services-group-list">
              <li
                class="services-group-list__item"
                v-for="(item, i) in service.list"
                :key="i"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content about-logos">
      <div class="content__wrapper">
        <div class="about-logos__logos">
          <div class="about-logos__logo">
            <img src="/img/about/energotek.svg" alt="energotek" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/garilla.svg" alt="garilla" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Genezis.svg" alt="Genezis" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/H_one.svg" alt="H_one" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/HARO.svg" alt="HARO" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/marusya.svg" alt="marusya" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Mobdebut.svg" alt="Mobdebut" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/MoltenGrass.svg" alt="MoltenGrass" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Motorika.svg" alt="Motorika" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Muza_Amanita.svg" alt="Muza_Amanita" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/OceanView.svg" alt="OceanView" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/OwnWifi.svg" alt="OwnWifi" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/PolarBear.svg" alt="PolarBear" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/PrimeTravel.svg" alt="PrimeTravel" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/ProZapchast.svg" alt="ProZapchast" />
          </div>
          <div class="about-logos__logo">
            <img
              src="/img/about/SmartsKvantelekom.svg"
              alt="SmartsKvantelekom"
            />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/SpisyNote.svg" alt="SpisyNote" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Tomi_Ai.svg" alt="Tomi_Ai" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Uni.svg" alt="Uni" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/ximtex.svg" alt="ximtex" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Ykigassen.svg" alt="Ykigassen" />
          </div>
          <div class="about-logos__logo">
            <img
              src="/img/about/Yrievskoe_Podvorie.svg"
              alt="Yrievskoe_Podvorie"
            />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/ZolotoAltaya.svg" alt="ZolotoAltaya" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/energotek.svg" alt="energotek" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/garilla.svg" alt="garilla" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Genezis.svg" alt="Genezis" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/H_one.svg" alt="H_one" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/HARO.svg" alt="HARO" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/marusya.svg" alt="marusya" />
          </div>
          <div class="about-logos__logo">
            <img src="/img/about/Mobdebut.svg" alt="Mobdebut" />
          </div>
        </div>
      </div>
    </div>
    <div class="content services-lists">
      <div class="content__wrapper">
        <div class="services-lists__row">
          <p class="services-lists__text">*** {{ $t("services.stepstext") }}</p>
          <p class="services-lists__text">Vorobey Art <span>x</span> XX24</p>
        </div>
        <Accordion :title="$t('services.steps.title1')">
          <div class="services-more">
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title4')"
                step="01"
                icon="services-design-01"
                :text="$t('services.steps.text1')"
              />
              <Step
                :title="$t('services.steps.title5')"
                step="02"
                icon="services-design-02"
                :text="$t('services.steps.text2')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title6')"
                step="03"
                icon="services-design-03"
                :text="$t('services.steps.text3')"
              />
              <Step
                :title="$t('services.steps.title7')"
                step="04"
                icon="services-design-04"
                :text="$t('services.steps.text4')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title8')"
                step="05"
                icon="services-design-05"
                :text="$t('services.steps.text5')"
              />
              <Step
                :title="$t('services.steps.title9')"
                step="06"
                icon="services-design-06"
                :text="$t('services.steps.text6')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title10')"
                step="07"
                icon="services-design-07"
                :text="$t('services.steps.text7')"
              />
              <Step
                :title="$t('services.steps.title11')"
                step="08"
                icon="services-design-08"
                :text="$t('services.steps.text8')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title12')"
                step="09"
                icon="services-design-09"
                :text="$t('services.steps.text9')"
              />
              <Step
                :title="$t('services.steps.title13')"
                step="10"
                icon="services-design-10"
                :text="$t('services.steps.text10')"
              />
            </div>
          </div>
        </Accordion>
        <Accordion :title="$t('services.steps.title2')">
          <div class="services-more">
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title14')"
                step="01"
                icon="services-web-01"
                :text="$t('services.steps.text11')"
              />
              <Step
                :title="$t('services.steps.title15')"
                step="02"
                icon="services-web-02"
                :text="$t('services.steps.text12')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title16')"
                step="03"
                icon="services-web-03"
                :text="$t('services.steps.text13')"
              />
              <Step
                :title="$t('services.steps.title17')"
                step="04"
                icon="services-web-04"
                :text="$t('services.steps.text14')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title18')"
                step="05"
                icon="services-web-05"
                :text="$t('services.steps.text15')"
              />
              <Step
                :title="$t('services.steps.title19')"
                step="06"
                icon="services-web-06"
                :text="$t('services.steps.text16')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title20')"
                step="07"
                icon="services-web-07"
                :text="$t('services.steps.text17')"
              />
            </div>
          </div>
        </Accordion>
        <Accordion :title="$t('services.steps.title3')">
          <div class="services-more">
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title21')"
                step="01"
                icon="services-copyright-01"
                :text="$t('services.steps.text18')"
              />
              <Step
                :title="$t('services.steps.title22')"
                step="02"
                icon="services-copyright-02"
                :text="$t('services.steps.text19')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title23')"
                step="03"
                icon="services-copyright-03"
                :text="$t('services.steps.text20')"
              />
              <Step
                :title="$t('services.steps.title24')"
                step="04"
                icon="services-copyright-04"
                :text="$t('services.steps.text21')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title25')"
                step="05"
                icon="services-copyright-06"
                :text="$t('services.steps.text22')"
              />
              <Step
                :title="$t('services.steps.title26')"
                step="06"
                icon="services-copyright-05"
                :text="$t('services.steps.text23')"
              />
            </div>
            <div class="services-more__row">
              <Step
                :title="$t('services.steps.title27')"
                step="07"
                icon="services-copyright-07"
                :text="$t('services.steps.text24')"
              />
            </div>
          </div>
        </Accordion>
      </div>
    </div>
    <Footer :case="false" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import Accordion from "../components/Accordion.vue";
import Footer from "../components/Cases/Footer.vue";
import Step from "../components/Services/Step.vue";

const { t, locale } = useI18n();
const services = ref([]);
const generateServices = () => [
  {
    title: t("services.list.title1"),
    list: t("services.list.list1").split(", "),
    link: "works#design",
  },
  {
    title: t("services.list.title2"),
    list: t("services.list.list2").split(", "),
    link: "works#web",
  },
  {
    title: t("services.list.title3"),
    list: t("services.list.list3").split(", "),
    link: "works",
  },
];

// Инициализация и обновление при смене языка
services.value = generateServices();
watch(locale, () => {
  services.value = generateServices();
});
</script>

<style lang="scss">
.feather-container {
  position: absolute;
  pointer-events: none;
  z-index: 4;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
.feather {
  pointer-events: none;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
@for $i from 1 through 10 {
  @keyframes featherAxisX-#{$i} {
    0% {
      opacity: 1;
      transform: translateX(0) scale(0);
      animation-timing-function: ease-in;
    }
    85% {
      opacity: 1;
    }
    100% {
      transform: translateX(var(--axisX-#{$i})) scale(1);
    }
  }

  @keyframes featherAxisY-#{$i} {
    0% {
      animation-timing-function: ease-out;
      transform: translateY(0) rotate(var(--rotate-#{$i}))
        scale(var(--scale-#{$i}));
    }
    100% {
      transform: translate(0, var(--axisY-#{$i})) rotate(var(--rotate-#{$i}))
        scale(var(--scale-#{$i}));
    }
  }

  @keyframes featherFalling-#{$i} {
    0% {
      transform: translate(0px, var(--axisY-#{$i})) rotate(var(--rotate-#{$i}))
        scale(var(--scale-#{$i}));
    }
    25% {
      transform: translate(var(--axisX-1-#{$i}), var(--axisY-#{$i}))
        rotate(calc(var(--rotate-#{$i}) + 25deg)) scale(var(--scale-#{$i}));
    }
    50% {
      transform: translate(var(--axisX-2-#{$i}), var(--axisY-#{$i}))
        rotate(calc(var(--rotate-#{$i}) - 30deg)) scale(var(--scale-#{$i}));
      opacity: 1;
    }
    75% {
      transform: translate(var(--axisX-3-#{$i}), var(--axisY-#{$i}))
        rotate(calc(var(--rotate-#{$i}) + 15deg)) scale(var(--scale-#{$i}));
    }
    100% {
      opacity: 0;
      transform: translate(0px, var(--axisY-#{$i})) rotate(var(--rotate-#{$i}))
        scale(var(--scale-#{$i}));
    }
  }
}
</style>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.services {
  position: relative;
  &__decor {
    position: absolute;
    &--1 {
      width: 1082px;
      transform: rotate(-135deg);
      right: -30px;
      top: -152px;
    }
    &--2 {
      width: 678px;
      transform: scaleY(-1) rotate(55deg);
      top: 452px;
      left: -280px;
    }
  }
}

.services-lists {
  padding: 0px 93px 150px;
  margin-top: 132px;
  &__row {
    display: flex;
    padding: 0px 72px 34px;
    justify-content: space-between;
  }
  &__text {
    font-size: 18px;
    color: #aaa;
    span {
      color: #222;
    }
  }
}
.services-more {
  display: flex;
  flex-direction: column;
  gap: 92px;
  &__row {
    display: flex;
    :deep(.services-item:first-child .services-item__row) {
      border-right: 1px solid #e0e0e0;
    }
    :deep(.services-item:last-child:not(:first-child) .services-item__row) {
      padding-left: 40px;
      padding-right: 112px;
    }
    :deep(.services-item) {
      max-width: 50%;
      width: 100%;
    }
  }
}

.services-text {
  padding: 53px 20px 80px;
  margin: 0 auto;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1168px;
    margin: 0 auto;
  }
  &__title {
    font-size: 50px;
    font-weight: 700;
  }
  &__button {
    width: 103px;
    height: 103px;
    background: transparent;
    text-transform: uppercase;
    position: relative;
    border: 0;
    z-index: 1;
    & > span {
      position: absolute;
      font-size: 16px;
      &:first-child {
        color: #222;
        font-weight: 700;
        transform: translate(-150%, -90%) rotate(5deg);
      }
      &:nth-child(2) {
        color: #868686;
        font-weight: 500;
        transform: translate(-142%, -10%) rotate(-1deg);
      }
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        width: 10px;
        background: white;
        right: 0;
        top: 0;
        z-index: -1;
      }
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        .services-text__circles {
          span {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      }
    }
    &.active {
      .services-text__circles {
        span {
          animation: circleActive 0.3s linear;
          &:nth-child(2) {
            animation-delay: 0.1s;
          }
          &:nth-child(3) {
            animation-delay: 0.2s;
          }
        }
      }
      & > span {
        &:first-child {
          animation: textActive1 0.3s linear;
          @keyframes textActive1 {
            0% {
              transform: translate(-150%, -90%) rotate(5deg);
            }
            50% {
              transform: translate(-130%, -80%) rotate(5deg) scale(0.9);
            }
            100% {
              transform: translate(-150%, -90%) rotate(5deg);
            }
          }
        }
        &:nth-child(2) {
          animation: textActive2 0.3s linear;
          @keyframes textActive2 {
            0% {
              transform: translate(-142%, -10%) rotate(-1deg);
            }
            50% {
              transform: translate(-125%, -5%) rotate(-1deg) scale(0.9);
            }
            100% {
              transform: translate(-142%, -10%) rotate(-1deg);
            }
          }
        }
      }
    }
  }
  &__circles {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    span {
      border-radius: 50%;
      position: absolute;
      top: 50%;
      display: block;
      left: 50%;
      transform: translate(-50%, -50%);
      &:nth-child(1) {
        width: 103px;
        height: 103px;
        border: 1px solid rgba(#0181c8, 0.1);
        transition: 0.3s linear;
      }
      &:nth-child(2) {
        width: 53px;
        height: 53px;
        border: 1px solid rgba(#0181c8, 0.5);
        transition: 0.3s linear 0.1s;
      }
      &:nth-child(3) {
        width: 20px;
        height: 20px;
        border: 1px solid #0181c8;
        transition: 0.3s linear 0.2s;
      }
    }
  }
}
@keyframes circleActive {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.services-groups {
  margin-top: 0;
  position: relative;
  padding-bottom: 0;
  &__svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &__wrapper {
    display: flex;
    padding: 30px;
    max-width: 1168px;
    margin: 0 auto;
    justify-content: space-between;
    gap: 32px;
  }
}
.services-group {
  // border-top: 1px solid #222;
  display: flex;
  flex-direction: column;
  max-width: 232px;
  width: 100%;
  &__row {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 32px;
  }
  &__title {
    font-size: 25px;
    font-weight: 700;
  }
  &__number {
    font-size: 15px;
    font-weight: 400;
    position: absolute;
    left: 0;
    top: 0;
    color: #a4a4a4;
  }
  &__link {
    text-decoration: none;
    margin-top: 1px;
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
    display: flex;
    gap: 12px;
    align-items: center;
    span {
      border-radius: 50%;
      background-color: #0181c8;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.services-group-list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &__item {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 7px 0;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    &::before {
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg width='5' height='5' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1.90741V3.09259L3.36918 3.01852L4.319 4.37037L3.29749 5L2.49104 3.48148L1.68459 5L0.681004 4.37037L1.6129 3.01852L0 3.09259V1.90741L1.6129 2L0.681004 0.62963L1.68459 0L2.49104 1.51852L3.29749 0L4.319 0.62963L3.36918 2L5 1.90741Z' fill='%230181C8'/%3E%3C/svg%3E%0A");
      display: block;
      width: 5px;
      height: 5px;
    }
  }
}

@keyframes logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(256px * -23));
  }
}
.about-logos {
  width: 100vw;
  max-width: 100vw;
  overflow: auto;
  padding: 0px 37px;
  height: 170px;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 100px;
  .content__wrapper {
    max-width: 100%;
  }
  &__logos {
    display: flex;
    animation: logos 120s infinite linear;
    img {
      user-select: none;
    }
  }
  &__logo {
    padding: 55px 50px 55px 55px;
    border-right: 1px solid #e0e0e0;
    filter: grayscale(1);
    transition: 0.3s ease-out;
    img {
      height: 60px;
    }
    &:hover {
      filter: grayscale(0);
    }
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
}

@media (max-width: 1440px) {
  .services-lists {
    padding: 0px 65px 150px;
    .content__wrapper {
      max-width: 1310px;
    }
    &__row {
      padding-left: 72px;
      padding-right: 72px;
    }
  }
  .services {
    &__decor {
      &--1 {
        right: -33px;
      }
      &--2 {
        display: none;
      }
    }
  }
}
@media (max-width: 1200px) {
  .services-groups__wrapper {
    gap: 50px 32px;
    flex-wrap: wrap;
  }
  .services-more {
    gap: 50px;
    &__row {
      flex-direction: column;
      gap: 50px;
      :deep(.services-item:first-child .services-item__row) {
        border-right: none;
      }
      :deep(.services-item:last-child .services-item__row) {
        padding: 26px 90px 0px;
      }
      :deep(.services-item) {
        max-width: 100%;
      }
    }
  }
  .services-lists {
    &__row {
      padding-left: 40px;
      padding-right: 50px;
    }
  }
}
@media (max-width: 1024px) {
  .services-lists {
    padding: 0px 38px 120px;
  }
  .services-text {
    margin: 0 auto;
    padding: 70px 80px 60px;
    &__title {
      font-size: 35px;
    }
  }
  .services-groups {
    .content__wrapper {
      max-width: 100%;
    }
  }
  .services-groups__wrapper {
    display: flex;
    width: 100%;
  }
  .services {
    &__decor {
      &--1 {
        width: 914px;
        right: -150px;
      }
    }
  }
  .services-more {
    :deep(.services-item .services-item__row) {
      padding: 26px 90px 0px !important;
    }
  }
  @keyframes logos {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(200px * -23));
    }
  }
  .about-logos {
    margin-top: 60px;
    height: 134px;
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      min-width: 200px;
      height: 134px;
      padding: 0px;
      img {
        height: 47px;
      }
    }
  }
}
@media (max-width: 768px) {
  .services-group {
    &__title {
      font-size: 20px;
    }
  }
  .services {
    &__decor {
      &--1 {
        width: 732px;
        right: -117px;
      }
    }
  }
  .services-group-list {
    margin-top: 25px;
  }
  .services-groups {
    padding: 0px 80px;
  }
  .services-text {
    margin: 0 auto;
    padding: 46px 80px 60px;
    &__wrapper {
      gap: 25px;
    }
    &__title {
      font-size: 30px;
    }
  }
  .services-lists {
    padding: 0px 38px 60px;
    margin-top: 60px;
  }
  .services-more {
    &__row {
      :deep(.services-item .services-item__row) {
        padding: 46px 42px 0px !important;
      }
    }
  }
}
@media (max-width: 570px) {
  .services-group-list {
    display: flex;
    flex-direction: column;
  }
  .services-text {
    padding-bottom: 30px;
    &__button {
      display: none;
    }
  }
  .services-lists {
    padding-left: 13px;
    padding-right: 13px;
    &__row {
      padding-left: 13px;
      padding-right: 13px;
    }
    &__text {
      font-size: 14px;
    }
  }
}
@media (max-width: 425px) {
  .services-groups {
    padding: 0px 30px;
  }
  .services {
    &__decor {
      &--1 {
        display: none;
      }
    }
  }
  .services-more {
    gap: 30px;
    &__row {
      :deep(.services-item .services-item__row) {
        padding: 46px 23px 0px 13px !important;
      }
    }
  }
  .services-lists {
    padding-left: 18px;
    padding-right: 18px;
    .content__wrapper {
      max-width: 100%;
    }
  }
  .services-text {
    margin: 0 auto;
    padding: 43px 31px 30px;
    &__title {
      font-size: 25px;
    }
  }
}
</style>
