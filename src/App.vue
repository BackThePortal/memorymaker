<template>
	<header
		class="m-8 bg-orange-300 p-4 rounded-xl flex justify-center border-y-2 border-slate-100/80"
	>
		<div class="text-center">
			<h1 class="font-semibold text-3xl text-black">MemoryMaker</h1>
			<p class="text-gray-900">{{ subtitle }}</p>
		</div>
	</header>
	<div class="px-8">
		<RouterView></RouterView>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const messages = [
	'Stay calm and memorize.',
	'Making memories since 2023.',
	'Your brain is more powerful than you think.',
	"And they said it couldn't be done.",
	'Never underestimate your abilities.',
	"Let's fulfill your expectations.",
	'Make it stick!',
];

const subtitle = ref(messages[Math.floor(Math.random() * messages.length)]);
</script>

<style scoped></style>
