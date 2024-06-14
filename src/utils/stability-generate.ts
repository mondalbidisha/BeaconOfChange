import axios from "axios";
import FormData from "form-data";


export const stabilityGenerate = async (): Promise<any | null> => {
    const payload = {
			prompt: "Lighthouse on a cliff overlooking the ocean",
			output_format: "webp"
		};
      
		const response = await axios.postForm(
			`https://api.stability.ai/v2beta/stable-image/generate/core`,
			axios.toFormData(payload, new FormData()),
			{
				validateStatus: undefined,
				responseType: "arraybuffer",
				headers: { 
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_STABILITY_API_KEY}`, 
					Accept: "image/*" 
				},
			},
		);
      
		if(response.status === 200) {
			return response;
		} else {
			throw new Error(`${response.status}: ${response.data.toString()}`);
		}
}
