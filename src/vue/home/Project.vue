<template>
	<article
		class="transition-all bg-gray-400/20 backdrop-blur-[2px] w-36 h-56 border-2 border-orange-100 rounded-2xl hover:bg-orange-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex justify-center text-white hover:text-black hover:font-semibold items-center"
	>
		<span v-if="project === undefined">New project</span>
	</article>
</template>

<script setup lang="ts">
import { Data } from '@/types';
const props = defineProps<{
	project?: Data.Project;
}>();
</script>

<style scoped></style>
