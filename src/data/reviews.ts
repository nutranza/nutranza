export interface Review {
    id: number;
    name: string;
    image: string;
    rating: number;
    text: string;
    role?: string; // Added optional role for more SaaS-like feel
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Irma Aggarwal",
        role: "Fitness Enthusiast",
        image: "/assets/images/reviews/review-1.jpg",
        rating: 5,
        text: "Perfect balance of taste, spicy, and smoky flavors! I am addicted to this snack."
    },
    {
        id: 2,
        name: "Prashti",
        role: "Yoga Instructor",
        image: "/assets/images/reviews/review-2.jpg",
        rating: 5,
        text: "I needed something that fits into my routine without messing up my digestion or energy. Nutranza, honestly like a clean chocolate milkshake."
    },
    {
        id: 3,
        name: "Karan Patel",
        role: "Software Engineer",
        image: "/assets/images/reviews/review-3.jpg",
        rating: 5,
        text: "This is my new best peanut butter I've had! The blend of smooth crunchy bits and rich chocolate is just perfect."
    },
    {
        id: 4,
        name: "Jyoti Rilhani",
        role: "Nutritionist",
        image: "/assets/images/reviews/review-4.jpg",
        rating: 5,
        text: "This is my different go to now for spreading on toast, adding to smoothies."
    },
    {
        id: 5,
        name: "Preksha",
        role: "Mother of two",
        image: "/assets/images/reviews/review-5.jpg",
        rating: 5,
        text: "This peanut butter is delicious. This keeps me full for hours, and I love that it has refined sugar. Perfect for my breakfast!"
    },
    {
        id: 6,
        name: "Shushann Kumar",
        role: "Athlete",
        image: "/assets/images/reviews/review-6.jpg",
        rating: 5,
        text: "I can't believe I used to take it everywhere. It has no sugar, it's delicious and wholesome."
    },
    {
        id: 7,
        name: "Kish",
        role: "Food Blogger",
        image: "/assets/images/reviews/review-7.jpg",
        rating: 5,
        text: "It's high quality. It provides nutritional value, quality both in terms of taste and weight loss journey."
    },
    {
        id: 8,
        name: "Aarav Singh",
        role: "Gym Trainer",
        image: "/assets/images/reviews/review-1.jpg", // Reusing image for demo
        rating: 5,
        text: "Finally a healthy snack that doesn't taste like cardboard. The flavor profile is incredible."
    },
    {
        id: 9,
        name: "Meera Reddy",
        role: "Wellness Coach",
        image: "/assets/images/reviews/review-2.jpg", // Reusing image for demo
        rating: 4,
        text: "I recommend this to all my clients. Clean ingredients and great taste."
    },
    {
        id: 10,
        name: "Vikram Malhotra",
        role: "Marathon Runner",
        image: "/assets/images/reviews/review-3.jpg", // Reusing image for demo
        rating: 5,
        text: "The perfect energy boost before my long runs. Highly recommended for endurance athletes."
    }
];
