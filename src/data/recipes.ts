export interface Recipe {
    id: string;
    name: string;
    image: string;
}

export const recipes: Recipe[] = [
    {
        id: "recipe-1",
        name: "No-Bake Energy Bites",
        image: "/assets/images/recipes/recipe-1.png",
    },
    {
        id: "recipe-2",
        name: "Mango PB Smoothie",
        image: "/assets/images/recipes/recipe-2.png",
    },
    {
        id: "recipe-3",
        name: "Quick Chocolate Oat Mug",
        image: "/assets/images/recipes/recipe-3.png",
    },
    {
        id: "recipe-4",
        name: "Overnight Muesli",
        image: "/assets/images/recipes/recipe-4.png",
    },
];
