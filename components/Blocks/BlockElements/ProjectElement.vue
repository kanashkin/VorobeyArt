<script setup>
defineProps({
	info: Object,
});

const project = ref(null);
defineExpose({ project });
</script>

<template>
	<div class="project" ref="project">
		<div class="project__info">
			<p class="project__title">
				<NuxtLink class="project__link" to="/case-in-dev">
					{{ info?.title }}
				</NuxtLink>
			</p>
			<p class="project__type">{{ info?.type }}</p>
			<p class="project__text">{{ info?.text }}</p>
		</div>
		<div class="project__banner">
			<img class="project__img" :src="info?.img" alt="" />
		</div>
		<div class="project__border"></div>
	</div>
</template>

<style scoped lang="scss">
.project {
	display: flex;
	padding: 0px 0px 32px;
	width: 100%;
	position: relative;
	height: 410px;

	&__border {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		background: #e1e1e1;
		transform: translateY(-1px);
	}

	&__info {
		display: flex;
		flex-direction: column;
		padding: 20px 20px 20px 0px;
		width: 100%;
		max-width: calc(50% + 20px);
		background: white;
	}

	&__title {
		font-size: 50px;
		font-weight: 600;
		padding-bottom: 18px;
		margin-bottom: -20px;
		margin-right: -20px;
		padding-right: 20px;
	}

	&__link::after {
		content: "";
		position: absolute;
		z-index: 2;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	&__type {
		font-size: 18px;
		font-weight: 600;
		margin-top: 175px;
	}
	&__text {
		font-size: 18px;
		margin-top: 14px;
		max-width: 620px;
	}

	&__banner {
		max-width: calc(100% - 20px);
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
		z-index: 1;
		border-radius: 15px;
	}

	&__img {
		width: 100%;
		max-width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	&:not(:last-child) {
		margin-bottom: 32px;
	}
}

@media(max-width: 1439px) {
	.project {
		flex-direction: column;

		&__info {
			max-width: 100%;
		}

		&__type {
			margin-top: 20px;
		}

		&__banner {
			max-width: 100%;
			background: #fff;
			border-radius: 0;

			img {
				border-radius: 15px;
			}
		}

		&__border {
			transform: none;
		}
	}
}

@media(max-width: 767px) {
	.project {
		&__title {
			font-size: 30px;
		}
	}
}
</style>
