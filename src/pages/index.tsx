import { ThemeToggle } from "../components/ThemeToggle";
import RecipeCard from "../components/RecipeCard";

const Index = () => {
    const recipe = {
        title: "Sweet Iced Coffee with Coconut Milk",
        rating: 4,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
        totalTime: "15 minutes",
        level: "Easy",
        badge: "under  $2",
        description: "Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop",
        ingredients: [
            "3 tablespoons of Espresso coffee powder",
            "1 cup of boiled water",
            "1 cup Coconut milk",
            "3 tablespoons of Espresso coffee powder",
        ],
        instructions: [
            "Boil some water and let sit for 1-2 minutes.",
            "Put the coffee grounds into a cafetiere and pour in the water.",
            "Let the coffee steep for 5 minutes then slowly press down the plunger on your cafetière.",
      "Pour the coffee into a jug, allow to cool then chill for several hours.",
      "Whisk in the coconut milk and condensed milk and serve over plenty of ice.",
      "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.",
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 justify-between items-center">
                    <h1 className="text-2xl font-bold">Recipe Browser</h1>
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