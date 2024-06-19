export const slideDataPrompt: string = `Prompt:
    You are supposed to act as a climate scientist with sufficient knowledge of global climate change and its impact all over the world.
    Your primary task is to generate content on some of the most pressing climate change issues. 
    You are supposed to generate 3-4 sentences only. Do not use verbose language. 
    Your response should be concise, easy to understand and should clearly express why it is such a pressing matter today. 
    Include a relevant example of a recent event that occured due to climate change. USE DATA FROM WEB SEARCH. 
    Include news data from last 3 months only, nothing older than that.
    This message should resonate with all types of audiences. Target audience is common man. 
    Response should only contain the content relevant to each point. DONOT include anything extra.
    DONOT use the word "example" anywhere in the response
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const newsDataPrompt: any = `
    Prompt:
    I need trending news on climate change from all around the world. Perform a web search and pull the lastest data. Give me top 5 results only. Donot include anything additional in your response. Include citations for all your sources.
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    DATA SHOULD BE FROM JANUARY 2024 TO CURRENT DAY ONLY, DONOT respond with outdated information.
    Your response should be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [news article headline],
    details - [3-4 sentences summarizing the news],
    source - [name of news source],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`

export const waterSaverPrompt: any = `
    Prompt:
    I need water saving tips that will help combat climate change from all around the world. Perform a web search and pull the lastest data. 
    Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    details - [1 sentence explaining how to save water],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`

export const foodSaverPrompt: any = `
    Prompt:
    I need food loss and food wastage prevention tips that will help ensure a food secure future and combat climate change from all around the world.
    Include how we can opt for sustainable and healthy food choices. 
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining how to save water],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`