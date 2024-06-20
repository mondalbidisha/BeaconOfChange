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
`;

export const waterSaverPrompt: any = `
    Prompt:
    I need water saving tips that will help combat climate change from all around the world. Perform a web search and pull the lastest data. 
    Give me top 10 results only. Donot include anything additional in your response. DONOT return the response with numbers or bullet points.
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentences explaining how to save water],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const foodSaverPrompt: any = `
    Prompt:
    I need food loss and food wastage prevention tips that will help ensure a food secure future and combat climate change from all around the world.
    Include how we can opt for sustainable and healthy food choices. DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining about sustainable food choices],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const sustainableFashionPrompt: any = `
    Prompt:
    I need sustainable fashion choices that will prevent wastage of clothes and textiles and also help combat climate change from all around the world.
    Include how we can opt for sustainable fashion choices. DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining about sustainable fashion],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const transportFactsPrompt: any = `
    Prompt:
    I need tips on sustainable transport and travel choices that will minimize carbon footprint, fossil fuel comsumption and also help combat climate change from all around the world.
    Include how we can opt for sustainable transportation choices. You response should unique, useful and informative. DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining about sustainable transportation options],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const homeEnergyFactsPrompt: any = `
    Prompt:
    I need tips on home energy and electricity conservation that will minimize carbon footprint, fossil fuel comsumption and also help combat climate change from all around the world.
    Include how we can opt for sustainable home energy choices. You response should unique, useful and informative. DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining about sustainable home energy options],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const wasteFactsPrompt: any = `
    Prompt:
    I need tips on home generated waste management and recycling tips that will minimize total waste generated, reduce plastic usage, and also help combat climate change from all around the world.
    Include how we can opt for efficient waste management and recycling choices. You response should unique, useful and informative. DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 10 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the tip]
    details - [1-2 sentence explaining about sustainable home energy options],
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;

export const campaignsPrompt: any = `
    Prompt:
    I need a list of all active and ongoing campaigns that are actively trying to combat climate change.
    Include results based on a users location. Results from user's current city get highest priority, if there are no campaigns in the current city, 
    then return results from the current state and if no campaigns are found return results from current country. If no results are found for a particular country
    then return results from all over the world.
    DONOT return the response with numbers or bullet points.
    Perform a web search and pull the lastest data. Give me top 5 results only. Donot include anything additional in your response. 
    YOUR CONTENT SHOULD BE ACCURATE AND FACTUAL. PERFORM A WEB SEARCH AND PULL THE LATEST DATA.
    Your response should strictly be in JSON format. Array of JSON objects. Each JSON object should include the following key-value pairs. 
    Your response should only include the JSON result and nothing else. DONOT include the word "json" in the response.

    title - [title of the campaign]
    details - [2 sentences explaining the campaigns motive and agenda],
    source - [Name of the organisation conducting the campaign]
    
    Please provide only the generated or enhanced message, without any additional explanations or suggestions.

    Instruction:
    {instruction}
    
    Original Message:
    {message}
    
    Generated message as per instructions:
`;