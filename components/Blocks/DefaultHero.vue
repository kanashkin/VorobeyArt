<script setup>
import gsap from "gsap";
import * as THREE from "three";
import { onMounted, onUnmounted } from "vue";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

defineProps({
	curtains: String,
});

onMounted(() => {
	let renderer, scene, camera, gltf, texture, theObject;
	let animationId;
	const feather = document.getElementById("feather");

	const model = {
		loaded: false,
		gltfLoader: new GLTFLoader().setPath("../models/"),
		textureLoader: new THREE.CubeTextureLoader(),
	};

	let resizeHandler, mouseMoveHandler;

	const init = async () => {
		model.gltf = await model.gltfLoader.loadAsync("pero_by_agamurian.glb");
		model.texture = model.textureLoader.load([
			"/models/cubemap/0001.jpg",
			"/models/cubemap/0002.jpg",
			"/models/cubemap/0003.jpg",
			"/models/cubemap/0004.jpg",
			"/models/cubemap/0005.jpg",
			"/models/cubemap/0006.jpg",
		]);
		model.texture.encoding = THREE.sRGBEncoding;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		feather.innerHTML = ""; // 💥 Удаляем старый canvas, если есть
		feather.appendChild(renderer.domElement);

		scene = new THREE.Scene();
		scene.environment = model.texture;

		camera = new THREE.PerspectiveCamera(
			50,
			window.innerWidth / window.innerHeight,
			0.1,
			10,
		);
		camera.position.set(0, 0, 1.0);

		const light = new THREE.DirectionalLight("#88aaff", 100);
		light.position.set(5.25, 3, 2.25);
		scene.add(light);

		const light2 = new THREE.DirectionalLight("#ff88aa", 20);
		light2.position.set(3.25, 5, 3.25);
		scene.add(light2);

		gltf = model.gltf;
		gltf.scene.scale.set(1.2, 1.2, 1.2);
		gltf.scene.rotation.set(Math.PI, 0, Math.PI * 0.3);
		gltf.scene.position.set(0, 0, 0.3);
		scene.add(gltf.scene);

		scene.traverse((object) => {
			if (object instanceof THREE.Mesh) {
				object.material.envMapIntensity = 2.0;
				object.material.needsUpdate = true;
				theObject = object;
			}
		});

		// theObject.rotationZ = Math.PI * 1.5;

		resizeHandler = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", resizeHandler);

		let prevX = 0,
			prevY = 0;
		const deBounceDelta = 5;

		mouseMoveHandler = (e) => {
			if (
				Math.abs(e.x - prevX) > deBounceDelta ||
				Math.abs(e.y - prevY) > deBounceDelta
			) {
				prevX = e.x;
				prevY = e.y;
				gsap.to(theObject.rotation, {
					duration: 0.1,
					ease: "linear",
					y: ((e.y - window.innerHeight / 2) / 1000) * -1,
					x: ((e.x - window.innerWidth / 2) / 1000) * -1,
					z: 0,
				});
			}
		};
		window.addEventListener("mousemove", mouseMoveHandler);

		const animate = () => {
			renderer.render(scene, camera);
			animationId = requestAnimationFrame(animate);
		};
		animate();
	};

	init();

	onUnmounted(() => {
		if (renderer) {
			renderer.dispose();
			renderer.forceContextLoss?.();
			renderer.domElement = null;
			renderer = null;
		}
		if (scene) {
			scene.traverse((obj) => {
				if (obj.geometry) obj.geometry.dispose();
				if (obj.material) {
					if (Array.isArray(obj.material)) {
						obj.material.forEach((m) => m.dispose());
					} else {
						obj.material.dispose();
					}
				}
			});
		}

		cancelAnimationFrame(animationId);
		window.removeEventListener("resize", resizeHandler);
		window.removeEventListener("mousemove", mouseMoveHandler);

		if (feather) feather.innerHTML = "";
	});
});
</script>

<template>
	<div class="home home-loaded">
		<h1 style="opacity: 0; position: absolute; width: 0; height: 0">
			VorobeyArt - студия дизайна
		</h1>
		<div class="background-text__container">
			<div class="background-text background-text--top">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--bottom">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--top">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--bottom">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--top">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--bottom">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--top">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--bottom">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--top">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
			<div class="background-text background-text--bottom">
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
				<img src="/img/creative.svg" alt="" />
			</div>
		</div>
		<div id="feather"></div>
		<div class="container home__container">
			<p class="home__title">
				<span>Создаём</span>
				<span>
					<svg
						width="169"
						height="28"
						viewBox="0 0 169 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M167 14H2.5M167 14L151.59 2M167 14L151.59 26"
							stroke="#0181C8"
							stroke-width="4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					дизайн
				</span>
				<span>Для сильных</span>
				<span>
					Бренд
					<svg
						width="38"
						height="34"
						viewBox="0 0 38 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M38 14.6784V19.3216L22.8306 19.022L31.1048 31.4537L26.8145 34L19 21.1189L11.0323 34L6.89516 31.4537L15.1694 19.022L0 19.3216V14.6784L15.1694 14.978L6.89516 2.54626L11.0323 0L19 13.0308L26.8145 0L31.1048 2.54626L22.8306 14.978L38 14.6784Z"
							fill="#0181C8"
						/>
					</svg>
					в
				</span>
			</p>
			<NuxtLink
				to="https://disk.yandex.ru/d/0kfbxgqp--2OWg"
				target="_blank"
				class="home-link"
			>
				<svg
					class="home-link__svg"
					:class="{
						'home-link__svg--preloader': curtains === 'Preloader',
						// 'home-link__svg--curtains': redirect,
					}"
					width="136"
					height="136"
					viewBox="0 0 136 136"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="68" cy="68" r="68" fill="#0181C8" />
					<path
						d="M124.817 79.2473L113.718 77.7417L113.919 76.2672L123.622 77.5836L124.314 72.4783L114.611 71.162L114.811 69.6875L125.909 71.1931L124.817 79.2473Z"
						fill="white"
					/>
					<path
						d="M121.196 90.5911C120.79 91.5425 120.133 92.1958 119.228 92.5511C118.327 92.9204 117.406 92.9038 116.465 92.5014C115.533 92.1032 114.885 91.449 114.519 90.539C114.15 89.6388 114.169 88.713 114.575 87.7616L115.588 85.3928L111.91 83.8209L112.494 82.4526L122.793 86.8541L121.196 90.5911ZM115.855 88.3086C115.612 88.8775 115.602 89.43 115.826 89.9662C116.059 90.5066 116.465 90.9005 117.043 91.1478C117.632 91.3993 118.197 91.4205 118.739 91.2112C119.281 91.002 119.673 90.6129 119.916 90.044L120.928 87.6753L116.868 85.9399L115.855 88.3086Z"
						fill="white"
					/>
					<path
						d="M107.597 95.1508L104.462 99.2994L103.338 98.4505L107.37 93.1148L116.306 99.8674L112.322 105.139L111.199 104.29L114.285 100.206L111.541 98.1316L108.695 101.897L107.585 101.058L110.43 97.2923L107.597 95.1508Z"
						fill="white"
					/>
					<path
						d="M99.7188 109.646C99.1185 109.824 98.5455 109.834 97.9998 109.677C97.4542 109.519 96.9774 109.193 96.5696 108.7C95.9579 107.96 95.7378 107.125 95.9094 106.194C96.0728 105.27 96.6107 104.431 97.5232 103.676C98.3535 102.99 99.1764 102.621 99.9919 102.569C100.799 102.525 101.547 102.709 102.235 103.123L101.72 104.483C100.663 103.724 99.563 103.817 98.4204 104.761C97.8203 105.258 97.4645 105.773 97.3532 106.308C97.2487 106.851 97.3799 107.345 97.747 107.789C98.114 108.233 98.5659 108.461 99.1025 108.474C99.631 108.494 100.171 108.276 100.721 107.821L101.733 106.985L102.599 108.033L101.872 108.634C101.346 109.069 101.032 109.543 100.93 110.057C100.835 110.578 100.961 111.048 101.308 111.467C101.647 111.879 102.071 112.089 102.577 112.099C103.083 112.124 103.594 111.923 104.112 111.495C105.066 110.706 105.353 109.756 104.973 108.644L106.394 108.404C106.861 110.024 106.397 111.412 104.999 112.568C104.169 113.254 103.308 113.578 102.418 113.539C101.52 113.507 100.778 113.137 100.194 112.43C99.5138 111.608 99.3556 110.68 99.7188 109.646Z"
						fill="white"
					/>
					<path
						d="M91.0401 110.045L86.3714 112.335L85.7514 111.071L91.7561 108.126L96.6879 118.182L90.7551 121.092L90.1351 119.827L94.732 117.573L93.2172 114.484L88.9794 116.563L88.3665 115.313L92.6042 113.235L91.0401 110.045Z"
						fill="white"
					/>
					<path
						d="M76.8726 125.019L75.4299 125.311L73.2055 114.334L74.6482 114.042L75.6492 118.981L80.9808 117.901L79.9798 112.961L81.4382 112.666L83.6626 123.643L82.2042 123.938L81.2605 119.281L75.9288 120.361L76.8726 125.019Z"
						fill="white"
					/>
					<path
						d="M61.1842 125.295L61.2656 123.889L64.5721 124.081L65.1385 114.305L66.608 114.39L66.0416 124.166L69.3321 124.357L69.2506 125.762L61.1842 125.295Z"
						fill="white"
					/>
					<path
						d="M50.9669 111.223L51.0589 113.894L55.8528 115.45L57.4957 113.342L59.0023 113.831L51.5729 123.195L49.975 122.677L49.4602 110.734L50.9669 111.223ZM54.9361 116.616L51.1162 115.376L51.3298 121.249L54.9361 116.616Z"
						fill="white"
					/>
					<path
						d="M38.3258 105.527L37.3376 104.846L39.3529 101.921L40.5782 102.766L39.3618 104.531L45.8177 108.979L39.4632 118.202L38.2379 117.358L43.7936 109.294L39.5511 106.371L33.9954 114.435L32.7701 113.59L38.3258 105.527Z"
						fill="white"
					/>
					<path
						d="M30.3266 95.0739L23.8512 100.349L33.9645 99.5397L34.7224 100.47L26.0389 107.544L25.0991 106.39L31.5869 101.105L21.4612 101.924L20.7033 100.994L29.3868 93.9202L30.3266 95.0739Z"
						fill="white"
					/>
					<path
						d="M13.8867 87.8526L24.1188 83.298L24.7174 84.6428L20.8 86.3865L21.7044 88.4183L26.7995 89.3203L27.4827 90.8551L22.2674 89.9191C22.414 90.6945 22.3018 91.4391 21.9307 92.1531C21.5597 92.867 21.0136 93.3845 20.2924 93.7054C19.4154 94.0958 18.5333 94.1207 17.6461 93.7801C16.7448 93.434 16.099 92.8225 15.7086 91.9454L13.8867 87.8526ZM20.7954 89.6811L19.5721 86.9331L15.757 88.6313L16.9803 91.3794C17.2015 91.8763 17.5775 92.2227 18.1083 92.4184C18.6391 92.6141 19.1676 92.5949 19.6938 92.3607C20.2201 92.1264 20.5929 91.7444 20.8125 91.2147C21.0223 90.6893 21.0166 90.1781 20.7954 89.6811Z"
						fill="white"
					/>
					<path
						d="M11.2077 58.1787L22.3425 59.3853L22.1822 60.8646L12.4472 59.8097L11.8921 64.9317L21.6272 65.9866L21.4668 67.466L10.332 66.2594L11.2077 58.1787Z"
						fill="white"
					/>
					<path
						d="M14.4344 46.9336C14.8124 45.9704 15.4488 45.2977 16.3436 44.9155C17.2323 44.5195 18.1533 44.5085 19.1065 44.8826C20.0498 45.2528 20.7176 45.8872 21.1097 46.7859C21.5057 47.6747 21.5148 48.6006 21.1368 49.5638L20.1958 51.9617L23.9193 53.423L23.3757 54.8081L12.9498 50.7167L14.4344 46.9336ZM19.841 49.0553C20.067 48.4794 20.0604 47.9268 19.8212 47.3975C19.5721 46.8643 19.1547 46.4827 18.5688 46.2528C17.973 46.0191 17.4075 46.0148 16.8722 46.2402C16.3369 46.4655 15.9562 46.8662 15.7302 47.4421L14.7892 49.84L18.9 51.4532L19.841 49.0553Z"
						fill="white"
					/>
					<path
						d="M27.9738 41.8144L31.0019 37.587L32.1465 38.4069L28.2519 43.8439L19.1468 37.3219L22.9948 31.9499L24.1395 32.7698L21.1579 36.9321L23.9545 38.9353L26.7031 35.0982L27.8347 35.9088L25.0862 39.7459L27.9738 41.8144Z"
						fill="white"
					/>
					<path
						d="M35.4516 27.1217C36.0472 26.9285 36.6197 26.9038 37.1692 27.0477C37.7187 27.1915 38.2036 27.5048 38.6239 27.9875C39.2542 28.7115 39.4955 29.541 39.3477 30.4758C39.2079 31.4036 38.6915 32.2563 37.7985 33.0337C36.986 33.7411 36.1727 34.131 35.3588 34.2032C34.5528 34.2684 33.8007 34.103 33.1023 33.7069L33.5828 32.3339C34.6587 33.0661 35.7557 32.9454 36.874 31.9718C37.4613 31.4605 37.8037 30.9361 37.9014 30.3985C37.9921 29.8528 37.8483 29.3628 37.4701 28.9284C37.0919 28.4939 36.6343 28.2771 36.0975 28.2777C35.5687 28.2714 35.0348 28.5029 34.4958 28.9721L33.5062 29.8336L32.6132 28.8079L33.3252 28.188C33.8401 27.7398 34.1418 27.2579 34.2304 26.7423C34.312 26.2187 34.1741 25.7518 33.8169 25.3415C33.4667 24.9393 33.0383 24.7395 32.5315 24.7423C32.0258 24.73 31.5196 24.9445 31.0127 25.3857C30.0795 26.1982 29.8167 27.1553 30.2244 28.2571L28.8104 28.5335C28.3016 26.9258 28.7311 25.5265 30.0987 24.3358C30.9112 23.6284 31.763 23.2829 32.654 23.2991C33.5531 23.3084 34.3038 23.659 34.9061 24.3508C35.6065 25.1553 35.7884 26.0789 35.4516 27.1217Z"
						fill="white"
					/>
					<path
						d="M43.8554 26.6212L48.4542 24.1941L49.1114 25.4393L43.1966 28.5609L37.9689 18.6558L43.8129 15.5715L44.4701 16.8167L39.9421 19.2065L41.5477 22.2488L45.722 20.0457L46.3717 21.2768L42.1974 23.4798L43.8554 26.6212Z"
						fill="white"
					/>
					<path
						d="M57.7558 11.1497L59.1902 10.8189L61.7068 21.7325L60.2724 22.0633L59.1399 17.1521L53.839 18.3745L54.9715 23.2856L53.5215 23.6199L51.005 12.7063L52.4549 12.372L53.5227 17.0025L58.8236 15.7802L57.7558 11.1497Z"
						fill="white"
					/>
					<path
						d="M73.3879 10.4076L73.3444 11.815L70.034 11.7127L69.7317 21.5001L68.2604 21.4546L68.5627 11.6673L65.2683 11.5655L65.3117 10.1582L73.3879 10.4076Z"
						fill="white"
					/>
					<path
						d="M84.0978 24.1854L83.9352 21.5179L79.1018 20.0895L77.5153 22.24L75.9962 21.791L83.1754 12.2339L84.7865 12.7101L85.6168 24.6344L84.0978 24.1854ZM79.9874 18.8997L83.8387 20.0379L83.4699 14.1729L79.9874 18.8997Z"
						fill="white"
					/>
					<path
						d="M96.762 29.4185L97.7697 30.0701L95.841 33.0528L94.5915 32.2449L95.7556 30.4445L89.1721 26.1874L95.2536 16.7823L96.5032 17.5903L91.1862 25.813L95.5125 28.6105L100.829 20.3878L102.079 21.1958L96.762 29.4185Z"
						fill="white"
					/>
					<path
						d="M105.209 39.7707L111.548 34.3325L101.459 35.399L100.677 34.4883L109.178 27.1956L110.147 28.325L103.796 33.7736L113.897 32.6966L114.679 33.6074L106.178 40.9L105.209 39.7707Z"
						fill="white"
					/>
					<path
						d="M121.838 46.5156L111.728 51.3351L111.095 50.0064L114.965 48.1612L114.008 46.1536L108.891 45.3847L108.169 43.8681L113.407 44.668C113.24 43.8967 113.333 43.1494 113.685 42.426C114.037 41.7027 114.57 41.1712 115.282 40.8315C116.149 40.4184 117.03 40.3706 117.926 40.688C118.836 41.0105 119.497 41.605 119.91 42.4716L121.838 46.5156ZM114.884 44.8676L116.179 47.5828L119.948 45.7858L118.654 43.0706C118.42 42.5795 118.035 42.2431 117.499 42.0612C116.963 41.8794 116.436 41.9124 115.916 42.1603C115.396 42.4081 115.033 42.7997 114.827 43.335C114.631 43.8656 114.65 44.3765 114.884 44.8676Z"
						fill="white"
					/>
				</svg>

				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="home-link__play"
					:class="{
						'home-link__play--preloader': curtains === 'Preloader',
						// 'home-link__play--curtains': redirect,
					}"
				>
					<path
						d="M1 24.9985L24.9981 1.00194"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M25 24.9985L25 1.00194"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M1 1L24.9981 1"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
#feather {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100vw;
	height: calc(100dvh - 40px);
	z-index: 1;
}

.home-link {
	text-decoration: none;
	position: relative;
	display: flex;
	height: 216px;
	width: 216px;
	z-index: 2;
	margin-left: auto;

	&::after {
		content: "";
		border-radius: 50%;
		width: 112px;
		height: 112px;
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid #fff;
		opacity: 0.2;
		transition: 0.3s ease;
	}

	&__svg {
		animation: rotateLink 30s linear infinite;
		transition: 0.3s ease-in-out;
		width: 100%;
		height: 100%;
		@keyframes rotateLink {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		&--curtains {
			animation: linkSvgVisible 1s ease-in-out both 0.9s;
		}
		&--preloader {
			animation: linkSvgVisible 1s ease-in-out both 2.7s;
		}
		@keyframes linkSvgVisible {
			0% {
				transform: scale(1.3);
				opacity: 0;
			}
			100% {
				transform: scale(1);
				opacity: 1;
			}
		}
	}

	&__play {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 38px;
		height: 38px;
		transform: translate(-50%, -50%);
		transition: 0.3s ease-in;
		&--curtains {
			animation: linkPlayVisible 1s ease-in-out both 0.9s;
		}
		&--preloader {
			animation: linkPlayVisible 1s ease-in-out both 2.7s;
		}
		@keyframes linkPlayVisible {
			0% {
				transform: translate(-100%, 0%) scale(0.8);
				opacity: 0;
			}
			100% {
				transform: translate(-50%, -50%) scale(1);
				opacity: 1;
			}
		}
	}

	&:hover {
		.home-link {
			&__play {
				transform: translate(-50%, -50%) scale(1.1);
			}
			&__svg {
				scale: 0.8;
			}
		}
		&::after {
			transform: translate(-50%, -50%) scale(0.8);
		}
	}
}

.home {
	min-height: 100dvh;
	height: 100dvh;
	max-height: 100dvh;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	position: relative;
	overflow: hidden;

	&__wrapper {
		position: relative;
		width: 100%;
		min-height: 100vh;
		height: 100vh;
		min-height: -webkit-fill-available;
		height: -webkit-fill-available;
		max-height: 100vh;
	}

	&__container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 1400px;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 50%;
		top: 50%;
		z-index: 2;
		padding: 193px 116px 206px 116px;
		transform: translate(-50%, -50%);
	}

	&__title {
		display: flex;
		flex-direction: column;
		gap: 3px;
		font-size: 50px;
		line-height: calc(55 / 50 * 100%);
		font-weight: 600;
		text-transform: uppercase;
		span {
			display: flex;
			height: 55px;
			align-items: center;
			gap: 20px;
			&:last-child {
				gap: 8px;
			}
		}
	}
}

@media(max-width: 1919px) {
	.home {
		&__container {
			padding: 186px 116px 100px 116px;
		}
	}
}

@media (max-width: 1439px) {
	.home {
		&__container {
			padding: 172px 83px 72px 80px;
		}

		&__title {
			font-size: 35px;

			span {
				height: 35px;
				gap: 10px;

				&:nth-child(2) svg {
					width: 111px;
					height: 22px;
				}

				&:nth-child(4) svg {
					width: 25px;
					height: 23px;
				}
			}
		}
	}

	.background-text {
		height: 166px;
	}

	.home-link {
		width: 124px;
		height: 124px;

		&__play {
			width: 22px;
			height: 22px;
		}

		&::after {
			width: 64.37px;
			height: 64.37px;
		}
	}
}

@media (max-width: 1023px) {
	.home {
		&__container {
			padding: 146px 64px 80px;
		}

		&__title {
			font-size: 30px;

			span {
				height: 30px;

				&:nth-child(2) svg {
					width: 90px;
					height: 20px;
				}

				&:nth-child(4) svg {
					width: 23px;
					height: 21px;
				}
			}
		}
	}
}

@media(max-width: 767px) {
	.home {
		&__container {
			padding: 118px 30px 46px 30px;
		}

		&__title {
			font-size: 25px;

			span {
				height: 25px;
				gap: 6px;

				&:nth-child(2) svg {
					width: 80px;
					height: 14px;
				}

				&:nth-child(4) svg {
					width: 19px;
					height: 17px;
				}
			}
		}
	}
}

@media (max-width: 424px) {
	.home {
		&__container {
			padding-bottom: 30px;
		}
	}
}
</style>
