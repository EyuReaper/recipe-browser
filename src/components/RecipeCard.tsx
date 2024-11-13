import React from "react";
import { Star} from "lucide-react";
import { cn } from "../lib/utils";

interface RecipeCardProps {
    title: string;
    rating: number;
    totalRatings: number;
    image: string;
    isGif?: boolean;
    totalTime: string;
    level: string;
    badge?: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    className?: string;
}

const RecipeCard = ({
    title,
    rating,
    totalRatings,
    image,
    isGif,
    totalTime,
    level,
    badge,
    description,
    ingredients,
    instructions,
    className,
}: RecipeCardProps) => {
    return (
        <div className={cn("bg-background rounded-lg shadow-lg p-6", className)}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                <img src={image} alt={title} className="w-full h-[400px]  object-cover rounded-lg" />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                {isGif ? "GIF" : "Image"}
                </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            {[...Array(5)].map((_,i) => (
                                <star 
                                key={i}
                                className={cn(
                                    "w-5 h-5",
                                  i<rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                )}
                                />
                            ))}
                            <span className=" text-muted-foreground ">({totalRatings})</span>
                            </div>
                            <h1 className="text-3xl font-bold">{title}</h1>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Total time:</span>
                                <span>{totalTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span  className="text-muted-foreground">Level:</span>
                                <span>{level}</span>
                            </div>
                            {badge && (
                                <div className="flex items-center gap-2">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                                    {badge}
                                    </span>
                                    </div>
                                )}
                            </div>
                            <p className="text-muted-foreground">{description}</p>
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
                                <ul className="space-y-2">
                                    {ingredients.map((ingredient, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span>{ingredient}</span>
                                        </li>
                                    ))}
                                    </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                                <ol className="space-y-2">
                                    {instructions.map((instruction, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span>{instruction}</span>
                                        </li>
                                    ))}
                                    </ol>
                            </div> 
                        </div>
                    </div>
                </div>
    );
};

export default RecipeCard;