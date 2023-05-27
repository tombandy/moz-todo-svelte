import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'worlds',
		data: [{name:"Jeremy",role:"CEO"},{name:"Jane",role:"COO"},{name:"Jemima",role:"CTO"},{name:"Martha",role:"Creative Director"}],
	}
});

export default app;