// Enhanced headlines for simulation
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover the Best at {name} in {location}",
  "Top Reasons {location} Loves {name}!",
  "{name} is the Talk of {location} – Here's Why!",
  "{name}: A Hidden Gem in {location}",
  "{name} Dominates {location}'s Market This Year",
  "Revolutionary Success: {name} Transforms {location}",
  "Breaking: {name} Sets New Standards in {location}",
  "{location}'s Premier Destination: {name} Leads the Way",
  "Exclusive: How {name} Became {location}'s Top Choice",
  "{name} - The Future of Business in {location}",
  "Market Leader Alert: {name} Reshapes {location}",
  "Innovation Hub: {name} Drives {location}'s Growth",
  "{location} Witnesses Unprecedented Success at {name}",
  "Game Changer: {name} Revolutionizes {location}'s Scene"
];

// Market positions
const marketPositions = ['Dominant', 'Strong', 'Growing', 'Emerging', 'Competitive', 'Stable'];
const growthPotentials = ['Explosive', 'High', 'Promising', 'Steady', 'Moderate', 'Limited'];
const competitionLevels = ['Low', 'Moderate', 'High', 'Intense', 'Saturated', 'Niche'];

// Business categories for more realistic ratings
const businessCategories = {
  restaurant: { minRating: 3.8, maxRating: 4.9, minReviews: 100, maxReviews: 2500 },
  retail: { minRating: 3.5, maxRating: 4.7, minReviews: 50, maxReviews: 1500 },
  service: { minRating: 4.0, maxRating: 4.9, minReviews: 25, maxReviews: 800 },
  tech: { minRating: 3.9, maxRating: 4.8, minReviews: 80, maxReviews: 1200 },
  default: { minRating: 3.5, maxRating: 4.8, minReviews: 30, maxReviews: 1000 }
};

// Utility functions
const getRandomHeadline = (name, location) => {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
};

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const detectBusinessCategory = (name) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('restaurant') || nameLower.includes('cafe') || nameLower.includes('diner') || 
      nameLower.includes('bistro') || nameLower.includes('food')) return 'restaurant';
  if (nameLower.includes('shop') || nameLower.includes('store') || nameLower.includes('market') || 
      nameLower.includes('boutique')) return 'retail';
  if (nameLower.includes('tech') || nameLower.includes('software') || nameLower.includes('digital') || 
      nameLower.includes('app')) return 'tech';
  if (nameLower.includes('service') || nameLower.includes('consulting') || nameLower.includes('agency') || 
      nameLower.includes('solutions')) return 'service';
  return 'default';
};

const generateBusinessMetrics = (name, location) => {
  const category = detectBusinessCategory(name);
  const categoryData = businessCategories[category];
  
  // Generate rating with category-specific ranges
  const rating = (Math.random() * (categoryData.maxRating - categoryData.minRating) + categoryData.minRating).toFixed(1);
  
  // Generate reviews with some correlation to rating (higher rated businesses tend to have more reviews)
  const ratingBonus = (parseFloat(rating) - 3.0) / 2.0; // 0 to 1 bonus
  const baseReviews = categoryData.minReviews + (categoryData.maxReviews - categoryData.minReviews) * Math.random();
  const reviews = Math.floor(baseReviews * (0.5 + ratingBonus * 0.5));
  
  return { rating, reviews };
};

const generateMarketIntelligence = () => {
  return {
    marketPosition: getRandomElement(marketPositions),
    growthPotential: getRandomElement(growthPotentials), 
    competitionLevel: getRandomElement(competitionLevels),
    trendScore: Math.floor(Math.random() * 41) + 60, // 60-100
    marketShare: (Math.random() * 25 + 5).toFixed(1) + '%', // 5-30%
    customerSentiment: getRandomElement(['Excellent', 'Very Positive', 'Positive', 'Mixed', 'Improving']),
    digitalPresence: Math.floor(Math.random() * 31) + 70 // 70-100
  };
};

// POST /api/business-data
exports.getBusinessData = (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const { rating, reviews } = generateBusinessMetrics(name, location);
  const marketIntelligence = generateMarketIntelligence();

  const response = {
    rating,
    reviews,
    headline: getRandomHeadline(name, location),
    marketIntelligence
  };

  res.json(response);
};

// GET /api/regenerate-headline?name=...&location=...
exports.regenerateHeadline = (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location query params are required' });
  }

  res.json({ headline: getRandomHeadline(name, location) });
};
