export namespace Data {
	export type ProjectType = 'dual' | 'unique';

	export enum Priority {
		LOW,
		MED,
		HIGH,
	}

	export interface Card {
		priority: Priority;
		key: string;
		value: string;
	}

	export interface Project {
		name: string;
		type: ProjectType;
		cards: Card[];
	}

	export type Storage = Project[];
}
