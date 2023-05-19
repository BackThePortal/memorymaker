<template>
	<h2 class="font-bold text-xl">Memory projects</h2>
	<div class="grid gap-4 mt-4">
		<Project v-for="project in storage.projects"></Project>
		<article
			class="transition-all w-36 h-56 border border-orange-100 rounded-2xl hover:bg-orange-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex justify-center text-white hover:text-black items-center"
		>
			<span>New project</span>
		</article>
	</div>
</template>

<script setup>
import { useStorageStore } from '@/stores/storage';
import Project from '@/vue/home/Project.vue';

const storage = useStorageStore();
</script>

<style></style>
