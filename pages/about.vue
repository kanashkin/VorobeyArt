<template>
  <div>
    <Head>
      <Title>Команда</Title>
      <Meta
        name="description"
        content="Команда, креатив которой не знает границ. Наши дизайнерские решения
          покоряют сердца, а технические навыки позволяют реализовывать самые
          смелые идеи."
      />
    </Head>
    <div class="content about">
      <div class="content__wrapper">
        <!-- <p class="about__title">CREATIVE</p> -->
        <div class="about__grid">
          <AboutCard
            v-for="(item, key) in cards"
            :key="key"
            :settings="item"
            :open="openAboutData"
            @openInfo="openInfo"
          />
          <p class="about__back-title">К</p>
          <p class="about__back-title">О</p>
          <p class="about__back-title">М</p>
          <p class="about__back-title">А</p>
          <p class="about__back-title">Н</p>
          <p class="about__back-title">ДА</p>
          <p class="about__decor-text">
            // DESIGN
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x CREATIVE
          </p>
        </div>
      </div>
      <img
        src="/img/about/feather.png"
        alt=""
        class="about__decor about__decor--1"
      />
      <img
        src="/img/about/feather.png"
        alt=""
        class="about__decor about__decor--2"
      />
    </div>
    <DefaultLogos />
    <div class="about-text__wrapper">
      <div class="about-text__decor">
        <svg
          width="1016"
          height="267"
          viewBox="0 0 1016 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M137.882 267H76.3653V59.3333H0V0H214.247V59.3333H137.882V267Z"
            fill="#F6F6F6"
          />
          <path
            d="M244.11 0H435.024V59.3333H305.627V101.714H424.417V161.048H305.627V207.667H439.266V267H244.11V0Z"
            fill="#F6F6F6"
          />
          <path
            d="M610.906 163.167L581.208 74.1667L551.511 163.167H610.906ZM534.541 216.143L517.571 267H453.933L549.389 0H613.027L708.484 267H644.846L627.876 216.143H534.541Z"
            fill="#F6F6F6"
          />
          <path
            d="M960.847 0H1016V267H954.484V133.5L892.967 267H854.784L793.268 133.5V267H731.751V0H786.904L873.876 188.595L960.847 0Z"
            fill="#F6F6F6"
          />
        </svg>
      </div>
      <div class="content about-text">
        <div class="content__wrapper">
          <div class="about-text__col">
            <p class="about-text__title">{{ $t("about.title") }}</p>
            <p class="about-text__text">
              {{ $t("about.text") }}
              <br />
              <br />
              {{ $t("about.text2") }}

              <br />
              <br />
              <br />

              <span>//</span> {{ $t("about.text3") }}
            </p>
          </div>
          <div class="about-text__grid">
            <AboutNumbers
              :curtains="curtains"
              number="120"
              :title="$t('about.number1')"
              class="about-text__number"
            />
            <AboutNumbers
              :curtains="curtains"
              number="8"
              :title="$t('about.number2')"
              class="about-text__number"
            />
            <AboutNumbers
              :curtains="curtains"
              number="257"
              :title="$t('about.number3')"
              class="about-text__number"
            />
            <AboutNumbers
              :curtains="curtains"
              number="25"
              :title="$t('about.number4')"
              class="about-text__number"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="content about-infographic">
			<p class="background-text">Creative</p>
			<div class="content__wrapper">
				<AboutNumbers :curtains="curtains" number="45" title="Довольных клиентов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="257" title="Завершенных проектов" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="5" title="лет успешной работы" class="about-infographic__number" />
				<AboutNumbers :curtains="curtains" number="25" title="Общий опыт команды (лет)" class="about-infographic__number" />
				<div id="feather"></div>
			</div>
		</div> -->
    <Footer :case="false" />
  </div>
</template>

<script>
import axios from "axios";

import Footer from "../components/Cases/Footer.vue";
import AboutNumbers from "@/components/About/Numbers.vue";
import AboutService from "@/components/About/Service.vue";
import AboutCard from "@/components/About/Card.vue";
import TitlePage from "@/components/TitlePage.vue";
import DefaultLogos from "@/components/Blocks/DefaultLogos.vue";

export default {
  name: "AboutPage",
  components: {
    AboutNumbers,
    AboutService,
    AboutCard,
    TitlePage,
    Footer,
    DefaultLogos,
  },
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {
    curtains: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
      close: "00",
      openAboutData: "00",
      likesCount: 0,
      cards: [
        {
          img: "02",
          title: "Артем",
          subtitle: "Хранитель идей",
        },
        {
          img: "05",
          title: "Ирина",
          subtitle: "Штатный суетолог",
        },
        {
          img: "07",
          title: "Евгения",
          subtitle: "Важный гусь",
        },
        {
          img: "03",
          title: "Симон",
          subtitle: "Магистр надежных стратегий",
        },
        {
          img: "04",
          title: "Вячеслав",
          subtitle: "Р@зр@бот4иk",
        },
        {
          img: "06",
          title: "Светлана",
          subtitle: "Менеджер счастья",
        },
      ],
      clientId: "",
    };
  },
  // async mounted() {
  // 	await this.updateLikes();
  // },

  methods: {
    // async updateLikes() {
    // 	this.sending = true;
    // 	try {
    // 		const { data } = await axios.post('/like-handler.php', {
    // 			id: '',
    // 			toggle: false,
    // 		});
    // 		this.likesCount = data.likesCount;
    // 		this.cards[0].subtitle = `2 + 2 = ${this.likesCount || '0'}`;
    // 	} catch (error) {
    // 		console.log('не удалось обновить количество лайков', error);
    // 	} finally {
    // 		this.sending = false;
    // 	}
    // },
    open(number) {
      if (number === this.$data.close) this.$data.close = "00";
      else this.$data.close = number;
    },
    openInfo(number) {
      if (number === this.$data.openAboutData || number === "00")
        this.$data.openAboutData = "00";
      else this.$data.openAboutData = number;
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.lil-gui .controller > .name) {
  color: white;
}
body {
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
.background-text {
  font-size: 23vw;
  color: #f6f6f6;
  font-weight: 800;
  transform-origin: bottom left;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 32%);
  z-index: 0;
  text-transform: uppercase;
  pointer-events: none;
  white-space: nowrap;
}
.about-text {
  padding: 110px 80px 120px;
  margin: 0 auto;
  .content__wrapper {
    max-width: 1168px;
    display: flex;
    justify-content: space-between;
    gap: 70px 32px;
    flex-wrap: wrap;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 485px;
    width: 100%;
    gap: 44px 115px;
  }
  &__number {
    :deep(.numbers__subtitle) {
      text-align: left;
    }
  }
  &__decor {
    position: absolute;
    bottom: 0;
    width: 110vw;
    left: 50%;
    bottom: -10%;
    height: auto;
    transform: translate(-50%, 0) rotate(-15deg);
    svg {
      height: auto;
      width: inherit;
    }
  }
  &__wrapper {
    position: relative;
    overflow: hidden;
  }
  &__col {
    max-width: 500px;
    width: 100%;
  }
  &__title {
    font-size: 50px;
    font-weight: 700;
  }
  &__text {
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
    span {
      color: #0181c8;
    }
  }
}
.about {
  padding: 0 93px 0;
  margin: 0 auto !important;
  position: relative;
  z-index: 2;
  margin-top: 53px !important;
  &__numbers {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__decor {
    position: absolute;
    &--1 {
      width: 404px;
      height: 133px;
      transform: scaleY(-1) rotate(42deg);
      left: -142px;
      bottom: -60px;
    }
    &--2 {
      top: -50px;
      right: -347px;
      transform: scale(-1) rotate(45deg);
    }
  }
  &__decor-text {
    position: absolute;
    right: 50px;
    top: 50%;
    font-size: 20px;
    font-weight: 700;
    color: #c1c1c1;
    transform: translate(0, -50%);
  }
  &__grid {
    position: relative;
    height: 531px;
    max-width: 1168px;
    width: 100%;
    margin: 0 auto;
  }
  &__title {
    font-size: clamp(230px, 16vw, 250px);
    line-height: clamp(230px, 16vw, 250px);
    color: #f6f6f6;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
  }
  &__back-title {
    position: absolute;
    font-size: 200px;
    font-weight: 700;
    top: 118px;
    color: #000;
    z-index: -1;
    &:nth-of-type(1) {
      left: 10.7%;
      z-index: 1;
    }
    &:nth-of-type(2) {
      left: 29.53%;
    }
    &:nth-of-type(3) {
      left: 42.97%;
    }
    &:nth-of-type(4) {
      left: 56.84%;
    }
    &:nth-of-type(5) {
      top: 289px;
      left: 37.58%;
    }
    &:nth-of-type(6) {
      top: 289px;
      left: 78.93%;
    }
  }
}

@media (max-width: 1200px) {
  .about-text {
    padding-top: 70px;
    padding-bottom: 70px;
    .content__wrapper {
      justify-content: center;
    }
    &__col {
      max-width: 100%;
    }
    &__title {
      font-size: 35px;
    }
    &__text {
      font-size: 18px;
    }
    &__decor {
      bottom: -10%;
    }
  }
  .about {
    &__grid {
      height: 403px;
    }
    &__title {
      font-size: clamp(150px, 20vw, 190px);
      line-height: clamp(150px, 20vw, 190px);
    }
    &__back-title {
      font-size: 152px;
      top: 90px;
      z-index: -1;
      &:nth-of-type(1) {
        left: 9.25%;
      }
      &:nth-of-type(2) {
        left: 28.93%;
      }
      &:nth-of-type(3) {
        left: 42.82%;
      }
      &:nth-of-type(4) {
        left: 57.17%;
      }
      &:nth-of-type(5) {
        top: 222px;
        left: 37.26%;
      }
      &:nth-of-type(6) {
        top: 222px;
        left: 80.09%;
      }
    }
    &__decor-text {
      font-size: 18px;
      right: 8px;
    }
    &__decor {
      &--1 {
        width: 448px;
        height: 147px;
        left: -176px;
        bottom: -150px;
        transform: scaleY(-1) rotate(52deg);
      }
      &--2 {
        width: 654px;
        height: 215px;
        right: -244px;
        top: -157px;
        transform: scale(-1) rotate(42deg);
      }
    }
  }
}
@media (max-width: 1024px) {
  .about {
    padding: 0 41px 0;
  }
}
@media (max-width: 960px) {
  .about {
    margin: 0 auto;
    &__grid {
      grid-template-columns: repeat(4, min(162px, calc(25% - 30px / 4)));
      gap: 40px 30px;
    }
  }
}
@media (max-width: 768px) {
  .about-text {
    &__grid {
      max-width: 466px;
    }
    &__decor {
      bottom: 0%;
    }
  }
  .about {
    padding: 0 41px 0;
    &__title {
      writing-mode: vertical-lr;
      font-size: 280px;
      line-height: 280px;
    }
    &__numbers {
      gap: 50px 0px;
    }
    &__grid {
      max-width: 571px;
      height: 700px;
    }
    &__back-title {
      font-size: 154px;
      top: 90px;
      &:nth-of-type(1) {
        left: 23.82%;
      }
      &:nth-of-type(2) {
        left: 53.59%;
      }
      &:nth-of-type(3) {
        left: 38.53%;
        top: 220px;
      }
      &:nth-of-type(4) {
        left: 60.42%;
        top: 220px;
      }
      &:nth-of-type(5) {
        top: 346px;
        left: 30.47%;
      }
      &:nth-of-type(6) {
        top: 506px;
        left: 48.34%;
      }
    }
    &__decor-text {
      display: none;
    }
    &__decor {
      &--1 {
        width: 962px;
        height: 317px;
        right: unset;
        left: -437px;
        top: -32px;
        transform: scale(-1) rotate(84deg);
      }
      &--2 {
        width: 404px;
        height: 133px;
        transform: scaleX(-1) rotate(-112deg);
        top: 468px;
        right: -148px;
      }
    }
  }
}
@media (max-width: 570px) {
  .about-text {
    padding: 60px 31px;
    &__title {
      font-size: 25px;
    }
    &__text {
      font-size: 16px;
      margin-top: 40px;
    }
    &__grid {
      max-width: 262px;
    }
  }
  .about {
    &__grid {
      max-width: 300px;
      height: 545px;
    }
    &__title {
      writing-mode: vertical-lr;
      font-size: 170px;
      line-height: 170px;
    }
    &__back-title {
      font-size: 112px;
      top: 90px;
      &:nth-of-type(1) {
        left: 30.33%;
      }
      &:nth-of-type(2) {
        left: 69.33%;
      }
      &:nth-of-type(3) {
        left: 4.33%;
        top: 183px;
      }
      &:nth-of-type(4) {
        left: 34.67%;
        top: 183px;
        z-index: 1;
      }
      &:nth-of-type(5) {
        top: 290px;
        left: 36.33%;
      }
      &:nth-of-type(6) {
        top: 406px;
        left: 45.33%;
      }
    }
    &__decor {
      display: none;
    }
  }
}
@media (max-width: 425px) {
  .about {
    padding: 0 31px 0;
    &__grid {
      grid-template-columns: repeat(2, 145px);
    }
  }
  .about-text {
    &__grid {
      gap: 74px 47px;
    }
  }
}
@media (max-width: 394px) {
  .about {
    &__numbers {
      gap: 38px 0px;
    }
  }
}
</style>
