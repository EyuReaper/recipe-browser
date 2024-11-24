import { ThemeToggle } from "../components/ThemeToggle";
import RecipeCard from "../components/RecipeCard";
import { useTheme } from "../hooks/useTheme";

const Index = () => {
  const { theme } = useTheme();

  const recipe = {
    title: "Sweet Iced Coffee with Coconut Milk",
    rating: 4,
    totalRatings: 189,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
    totalTime: "15 minutes",
    level: "Easy",
    badge: "Under $2",
    description: "Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop",
    ingredients: [
      "3 tablespoon Espresso coffee powder",
      "1 cup off the boil water",
      "1 cup Coconut milk",
      "3 tablespoon Espresso coffee powder"
    ],
    instructions: [
      "Boil some water and let sit for 1-2 minutes.",
      "Put the coffee grounds into a cafetière and pour in the water.",
      "Let the coffee steep for 5 minutes then slowly press down the plunger on your cafetière.",
      "Pour the coffee into a jug, allow to cool then chill for several hours.",
      "Whisk in the coconut milk and condensed milk and serve over plenty of ice.",
      "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving."
    ]
  };

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${theme}`}>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Recipe Browser</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <RecipeCard {...recipe} />
      </main>
    </div>
  );
};

export default Index;