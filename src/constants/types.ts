export type Data = {
	img: string;
	title: string;
	fallback: string;
	description?: string | null;
};
  
export type CurrentSlideData = {
	data: Data;
	index: number;
};