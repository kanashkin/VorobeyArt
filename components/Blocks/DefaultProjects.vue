<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectElement from "./BlockElements/ProjectElement.vue";
import { nextTick } from "vue";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
	{
		title: "MIUZ Diamonds",
		type: "Брендбук - Логотип",
		text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
		img: "/img/projectbanners/project-banner-01.jpg",
	},
	{
		title: "Энерготэк",
		type: "Брендбук - Логотип",
		text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
		img: "/img/projectbanners/project-banner-02.jpg",
	},
	{
		title: "H-ONE",
		type: "Брендбук - Логотип",
		text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
		img: "/img/projectbanners/project-banner-03.jpg",
	},
	{
		title: "На Чиле",
		type: "Брендбук - Логотип",
		text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
		img: "/img/projectbanners/project-banner-04.jpg",
	},
	{
		title: "Киноуроки",
		type: "Брендбук - Логотип",
		text: "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.",
		img: "/img/projectbanners/project-banner-05.jpg",
	},
];

const projectRefs = [];
const container = ref(null);
const scrollTriggers = [];

const initAnimation = () => {
	projectRefs.forEach((item, index) => {
		const el = item?.project;
		const border = el?.children[el?.children.length - 1];
		const nextEl = projectRefs[index + 1]?.project;

		console.log(border);
		if (!el || !border || !nextEl) return;
		const timelineBorder = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: `top+=32 top+=${100 * index + 100}`,
			endTrigger: nextEl,
			end: `top top+=${100 * (index + 1) + 100}`,
			scrub: true,
			// markers: true,
			scroller: document.documentElement,
		},
		});

		timelineBorder.fromTo(
		border,
		{ top: "100%", ease: "none" },
		{ top: "98px", ease: "none" },
		);

		scrollTriggers.push(timelineBorder);

		const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: `top top+=${100 * index + 100}`,
			endTrigger: projectRefs[projectRefs.length - 1].project,
			end: "bottom-=32 top+=878",
			pin: true,
			// markers: {
			//   startColor: "blue",
			//   endColor: "purple",
			// },
			pinSpacing: false,
			scroller: document.documentElement,
		},
		});

		scrollTriggers.push(timeline.scrollTrigger);
	});
};

onMounted(async () => {
	await nextTick();
	initAnimation();
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	scrollTriggers.length = 0;
	projectRefs.length = 0;
});

</script>

<template>
	<section ref="container" class="projects">
		<div class="projects__container container">
		<div class="projects__items">
			<div class="project-wrapper" v-for="(project, index) in PROJECTS">
			<ProjectElement
				:info="project"
				:ref="(el) => (projectRefs[index] = el)"
			/>
			</div>
		</div>
		<NuxtLink class="projects__more" to="/case-in-dev">
			Все проекты
			<svg
			width="51"
			height="50"
			viewBox="0 0 51 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
				d="M3 47.5039L47.9963 2.51039"
				stroke="black"
				stroke-width="5"
				stroke-linecap="round"
			/>
			<path
				d="M48 47.5039L48 2.5104"
				stroke="black"
				stroke-width="5"
				stroke-linecap="round"
			/>
			<path
				d="M3 2.49609L47.9963 2.4961"
				stroke="black"
				stroke-width="5"
				stroke-linecap="round"
			/>
			</svg>
		</NuxtLink>
		</div>
	</section>
</template>

<style scoped lang="scss">
.project-wrapper {
	margin-bottom: 32px;

	&:last-child {
		position: relative;
		z-index: 1;
		margin-bottom: 0;
	}
}

.projects {
	padding: 100px 0px 0px;

	&__container {
		max-width: 1820px;
		padding: 0px 30px;
		margin: 0 auto;
		position: relative;
	}

	&__items {
		position: relative;
	}

	&__more {
		display: flex;
		padding: 32px 0px;
		border-bottom: 2px solid #e1e1e1;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		font-size: 50px;
		font-weight: 600;
		position: relative;
		z-index: 3;

		svg {
			width: 45px;
			height: 45px;
		}
	}
}

@media(max-width: 1919px) {
	.projects {	
		&__container {
			padding: 0 64px;
		}

		&__more {
			padding: 64px 0;
		}
	}
}

@media(max-width: 1439px) {
	.projects {
		padding-top: 44px;

		&__container {
			padding: 0 80px;
		}

		&__more {
			padding: 96px 0 32px;
			font-size: 35px;

			svg {
				width: 31px;
				height: 31px;
			}
		}
	}
}

@media(max-width: 1023px) {
	.projects {
		padding-top: 32px;

		&__more {
			padding: 80px 0 16px;
			font-size: 30px;

			svg {
				width: 26px;
				height: 26px;
			}
		}
	}
}

@media(max-width: 767px) {
	.projects {
		&__container {
			padding: 0 30px;
		}

		&__more {
			padding: 32px 0 16px;
			font-size: 25px;

			svg {
				width: 14px;
				height: 14px;
			}
		}
	}

	.project-wrapper * {
		width: 100% !important;
	}
}
</style>
