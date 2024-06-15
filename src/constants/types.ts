import { ReactNode } from "react";

export type Data = {
	img: string;
	title: string;
	fallback: string;
	description?: string | null;
};

export type Fact = {
	name: string;
	description: string;
	className: string;
	background: ReactNode | null;
};
  
export type CurrentSlideData = {
	data: Data;
	index: number;
};