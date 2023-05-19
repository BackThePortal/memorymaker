import { defineStore } from 'pinia';
import { Data } from '@/types';

export const useStorageStore = defineStore('storage', {
	state: () => {
		return {
			projects: [] as Data.Storage,
		};
	},
});
