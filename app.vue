<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<!-- <Plug @pass="checkPass" v-if="!isDeveloper"/> -->
	<div class="main-container">
		<HeaderPage
			v-if="$route.matched[0]?.name !== 'NotFound'"
			:curtains="curtains"
			:disableHeaderPlaceholder="currentPageName === 'index'"
			:pages="{
				contacts: currentPageName === 'contacts',
				works: currentPageName === 'works',
				about: currentPageName === 'about',
				policy: currentPageName === 'policy',
				services: currentPageName === 'services',
			}"
			@setCurtains="setCurtains"
			@setMenu="setMenu"
		/>
		<PreloaderElement v-if="$route.matched[0]?.name !== 'NotFound'" />
		<CurtainsElement
			v-if="
				$route.matched[0]?.name !== 'NotFound' &&
				curtains !== 'Menu' &&
				curtains !== 'Preloader'
			"
			:menu="menu"
			@setCurtains="setCurtains"
			@setMenu="setMenu"
		/>
		<!-- <DelayHydration> -->
		<!-- <Transition :name="curtains === 'Menu' ? 'menu' : 'page'"> -->
		<ClientOnly>
			<NuxtPage
				v-slot="{ Component }"
				:class="{ menu: curtains === 'Menu' }"
				:curtains="curtains"
			>
				<component :is="Component" :key="$route.path"> </component>
			</NuxtPage>
		</ClientOnly>
		<!-- </Transition> -->
		<!-- </DelayHydration> -->
	</div>
</template>

<script setup>
import HeaderPage from "~/components/Header.vue";
import PreloaderElement from "~/components/Preloader.vue";
import CurtainsElement from "~/components/Curtains.vue";
import Plug from "./components/Plug.vue";

const curtains = ref("Preloader");
const menu = ref(false);
const currentPageName = ref("");
const isDeveloper = ref(false);
const pass = "Ff267S_Zs555";

const model = reactive({
	loaded: false,
});

const route = useRoute();

onMounted(() => {
	const password = localStorage.getItem("VorobeyArtPassword");
	if (password === pass) isDeveloper.value = true;

	if (curtains.value === "Preloader") {
		setTimeout(() => {
			curtains.value = "Nothing";
		}, 3500);
	}

	currentPageName.value = route.name;
	updateBodyClass(currentPageName.value);
});

watch(
	() => route.name,
	(newName) => {
		setTimeout(() => {
			currentPageName.value = newName;
		}, 230);
		updateBodyClass(newName);
		console.log(route);
	},
);

function updateBodyClass(name) {
	if (
		name === "works" ||
		name === "about" ||
		name === "policy" ||
		name === "services"
	) {
		document.body.classList.add("lines");
	} else {
		document.body.classList.remove("lines");
	}
}

function setCurtains(value) {
	curtains.value = value;
}

function setMenu(value) {
	menu.value = value;
	if (value) {
		curtains.value = "Menu";
		setTimeout(() => {
			menu.value = false;
			curtains.value = "Nothing";
		}, 500);
	}
}

function checkPass(e) {
	localStorage.setItem("VorobeyArtPassword", e);
	if (e === pass) isDeveloper.value = true;
}

// Плавный скролл для минимизации ошибок в анимациях
// import Lenis from "@studio-freight/lenis";

// onMounted(() => {
//   const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     smooth: true,
//     lerp: 0.1,
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);
// })
</script>

<style lang="scss">
@font-face {
	font-family: Gilroy;
	src: url("@/assets/fonts/Gilroy-Regular.eot");
	src:
		local("Gilroy Regular"),
		local("Gilroy-Regular"),
		url("@/assets/fonts/Gilroy-Regular.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Regular.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Regular.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: Gilroy;
	src: url("@/assets/fonts/Gilroy-Bold.eot");
	src:
		local("Gilroy Bold"),
		local("Gilroy-Bold"),
		url("@/assets/fonts/Gilroy-Bold.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Bold.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Bold.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Bold.ttf") format("truetype");
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}
@font-face {
	font-family: Gilroy;
	src: url("@/assets/fonts/Gilroy-Black.eot");
	src:
		local("Gilroy Black"),
		local("Gilroy-Black"),
		url("@/assets/fonts/Gilroy-Black.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Black.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Black.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Black.ttf") format("truetype");
	font-weight: 900;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-Light.eot");
	src:
		local("Gilroy Light"),
		local("Gilroy-Light"),
		url("@/assets/fonts/Gilroy-Light.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Light.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Light.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Light.ttf") format("truetype");
	font-weight: 300;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-Semibold.eot");
	src:
		local("Gilroy Semibold"),
		local("Gilroy-Semibold"),
		url("@/assets/fonts/Gilroy-Semibold.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Semibold.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Semibold.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Semibold.ttf") format("truetype");
	font-weight: 600;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-Medium.eot");
	src:
		local("Gilroy Medium"),
		local("Gilroy-Medium"),
		url("@/assets/fonts/Gilroy-Medium.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Medium.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Medium.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Medium.ttf") format("truetype");
	font-weight: 500;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-UltraLight.eot");
	src:
		local("Gilroy UltraLight"),
		local("Gilroy-UltraLight"),
		url("@/assets/fonts/Gilroy-UltraLight.eot?#iefix")
			format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-UltraLight.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-UltraLight.woff") format("woff"),
		url("@/assets/fonts/Gilroy-UltraLight.ttf") format("truetype");
	font-weight: 200;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-Extrabold.eot");
	src:
		local("Gilroy Extrabold"),
		local("Gilroy-Extrabold"),
		url("@/assets/fonts/Gilroy-Extrabold.eot?#iefix")
			format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Extrabold.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Extrabold.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Extrabold.ttf") format("truetype");
	font-weight: 800;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}
@font-face {
	src: url("@/assets/fonts/Gilroy-Thin.eot");
	src:
		local("Gilroy Thin"),
		local("Gilroy-Thin"),
		url("@/assets/fonts/Gilroy-Thin.eot?#iefix") format("embedded-opentype"),
		url("@/assets/fonts/Gilroy-Thin.woff2") format("woff2"),
		url("@/assets/fonts/Gilroy-Thin.woff") format("woff"),
		url("@/assets/fonts/Gilroy-Thin.ttf") format("truetype");
	font-weight: 100;
	font-style: normal;
	font-display: swap;
	font-family: Gilroy;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
menu,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	line-height: 120%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
	display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
	display: none;
}
menu,
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
	margin: 0;
	padding: 0;
	line-height: 1;
	min-height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
	background-size: 500vw 1281px;
}
* {
	box-sizing: border-box;
	font-family: Gilroy !important;
	font-weight: 400;
	color: #222222;
	outline: none;
	-webkit-tap-highlight-color: transparent;
	&:active,
	&:focus,
	&:hover,
	&:focus-within {
		outline: none;
	}
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
}
#app {
	max-width: 100vw;
	min-height: 100vh;
	width: 100vw;
	// overflow: hidden;
	position: relative;
	overflow-x: hidden;
}
.main-container {
	height: 100%;
	min-height: 100vh;
}
.page-leave-active {
	transition: 0.5s linear;
}
.page-enter-active {
	transition: 0s linear 0.5s;
}
.page-enter-from {
	opacity: 0;
}
.page-enter-to {
	opacity: 1;
}
.page-leave-from {
	opacity: 1;
}
.page-leave-to {
	opacity: 0;
}
.menu.page-leave-active {
	transition: 0s linear;
}
.menu.page-enter-active {
	transition: 0s linear;
}
.menu.page-enter-from {
	opacity: 0;
}
.menu.page-enter-to {
	opacity: 1;
}
.menu.page-leave-from {
	opacity: 1;
}
.menu.page-leave-to {
	opacity: 0;
}
.content {
	max-width: 1920px;
	width: 100%;
	margin: 120px auto 0;
	padding: 0 93px 100px;
	&__wrapper {
		max-width: 1274px;
		width: 100%;
		margin: 0 auto;
		position: relative;
		z-index: 3;
	}
}
@media (max-width: 1440px) {
	.content {
		&__wrapper {
			max-width: 1146px;
		}
	}
}
@media (max-width: 1024px) {
	.content {
		margin: 46px auto 0;
		padding: 0 41px 100px;
		&__wrapper {
			max-width: 798px;
		}
	}
}
@media (max-width: 768px) {
	.content {
		padding: 0px 41px 50px;
		&__wrapper {
			max-width: 612px;
		}
	}
}
@media (max-width: 425px) {
	.content {
		margin: 43px auto 0;
		padding: 0 32px 50px;
		&__wrapper {
			max-width: 337px;
		}
	}
}
@media (max-width: 366px) {
	.content {
		&__wrapper {
			max-width: 284px;
		}
	}
}

.background-text {
	color: #f6f6f6;
	font-weight: 800;
	z-index: 0;
	text-transform: uppercase;
	white-space: nowrap;
	height: 300px;
	img {
		height: inherit;
		width: inherit;
	}
	&__container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: bottom left;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: translate3d(-50%, -50%, 0) rotate(-15deg);
		z-index: 0;
		gap: 35px;
		height: 100vh;
		width: 100vw;
		transform-origin: center center;
	}
	&:not(:is(&--top, &--bottom)) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&--top {
		animation: topBackgroundText 60s linear infinite;
	}
	&--bottom {
		animation: bottomBackgroundText 60s linear infinite;
	}
}

@keyframes topBackgroundText {
	0% {
		transform: translate(0%, 0);
	}
	100% {
		transform: translate(-14.2856924277%, 0);
	}
}

@keyframes bottomBackgroundText {
	0% {
		transform: translate(0%, 0);
	}
	100% {
		transform: translate(14.2856924277%, 0);
	}
}

@media(max-width: 1919px) {
	.background-text {
		height: 222px;
	}
}

@media (max-width: 1439px) {
	.background-text {
		height: 166px;
	}
}

@media (max-width: 1023px) {
	.background-text {
		height: 149px;

		&--top {
			animation: topBackgroundText 60s linear infinite;
		}
		&--bottom {
			animation: bottomBackgroundText 60s linear infinite;
		}
	}
}

@media(max-width: 767px) {
	.background-text {
		height: 135px;
	}
}
</style>
