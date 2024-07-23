const loadingMessages = [
  'Greening up your screen... 🌿. Please wait a moment!',
  'Sustainability magic in progress... 🪄✨. Hang tight!',
  'Composting some data... 🍂. Just a sec!',
  'Brewing some eco-friendly goodness... ☕🌱. Almost there!',
  'Charging up with renewable energy... ⚡🌞. Stay tuned!',
  'Turning off unnecessary data lights... 💡🔄. Please hold on!',
  'Growing a greener app for you... 🌿📱. Just a moment!',
  'Tidying up our carbon footprint... 🧹🌍. Loading soon!',
  'Planting seeds of sustainability... 🌱💻. Patience, please!',
];

const generateLoadingMessage = () => {
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomIndex];
};

export default generateLoadingMessage;
