<template>
	<div id="app">
		<Loading />
		<transition name="fade" mode="out-in">
			<div>
				<div class="main-wrapper">
					<Header />
					<Logo />
					<transition name="fade" mode="out-in">
						<router-view />
					</transition>
					<BotFooter />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Logo from '@/components/Logo.vue';
	import Loading from '@/components/Loading.vue';
	import BotFooter from '@/components/BotFooter.vue';
	import SideNav from '@/components/SideNav.vue';
	import { gsap } from 'gsap';

	export default {
		data() {
			return {
				loading: true,
			};
		},
		components: {
			Header,
			Logo,
			Loading,
			BotFooter,
			SideNav,
		},
		mounted() {
			console.log('running');
			gsap.set('.outer, .inner', { opacity: 0 });
      gsap.set('loading-wrapper', {x: 0})
			let tl = gsap.timeline();
			tl.to('.inner', { opacity: 1, duration: 1.5 });
			tl.to('.outer', { opacity: 1, duration: 1.5 });
			tl.to('.outer, .inner', { opacity: 0 });
      tl.to('loading-wrapper', {x:1000, duration: 1.5});
		},
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
	@import '@/assets/css/animations.scss';

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.circles {
		width: 35rem;
		position: fixed;
		bottom: -10rem;
		right: -10rem;
		z-index: 1;
	}
	:root {
		--font-antonio: 'Antonio', sans-serif;
		--font-zen: 'Zen Dots', cursive;
		--font-roboto: 'Roboto', sans-serif;

		/* Color Theme Swatches in HSLA */
		--blue: hsla(300, 11%, 31%, 1);
		// --cream : hsla(28, 67%, 84%, 1);
		--cream: hsla(28, 91%, 91%, 1);
		--hot-orange: hsla(22, 88%, 56%, 1);
		--orange: hsla(16, 68%, 53%, 1);
		--brown: hsla(11, 50%, 36%, 1);
		--black: hsla(21, 100%, 4%, 0.5);
	}

	html,
	body {
		background-color: var(--orange);
		font-family: 'Poiret One', cursive;
		color: var(--cream);
	}

	a,
	.link {
		font-family: var(--font-antonio);
		color: var(--cream);
		padding-bottom: 3px;
		border-bottom: 1px solid transparent;
		text-decoration: none;
		transition: all 0.4s ease;
		text-transform: uppercase;
		margin: 0 1rem;

		&:hover {
			filter: opacity(50%);
			border-bottom: 1px solid var(--cream);
		}
	}

	li {
		list-style-type: none;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: var(--cream);
	}

	.main-wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	//opening animation
	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		background: var(--mango-tango);
		height: 100vh;
		width: 100vw;
		

		&-wrapper {
			display: block;
			height: 100vh;
			width: 100vw;
			// position: absolute;
			// top: 0;
			// right: 0;
			background-color: red;
      z-index: 99;
		}

		&__logo {
			width: 20%;
		}
	}
</style>
