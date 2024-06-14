export type Data = {
	img: string;
	title: string;
	fallback: string;
	description?: string;
	location?: string;
};
  
export type CurrentSlideData = {
	data: Data;
	index: number;
};