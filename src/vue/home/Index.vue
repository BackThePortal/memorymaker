<template>
	<h2 class="font-bold text-xl bg-gray-800/20 rounded-xl p-2">
		Memory projects
	</h2>
	<div class="grid gap-4 grid-flow-col place-content-start mt-4">
		<Project v-for="project in storage.projects + 1"></Project>
	</div>
</template>

<script setup>
import { useStorageStore } from '@/stores/storage';
import Project from '@/vue/home/Project.vue';

const storage = useStorageStore();
</script>

<style></style>
