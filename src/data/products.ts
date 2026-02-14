export interface ProductSpecs {
    form: string;
    shelfLife: string;
    moq: string; // Minimum Order Quantity
    packaging?: string;
    netWeight?: string;
    hsCode?: string; // HS Code for export
    casePack?: string; // Case packaging info
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    subCategory?: string;
    image: string; // URL path
    images?: string[]; // Array of images for gallery
    sku?: string; // SKU code
    description: string;
    origin: string;
    certifications: string[];
    dietaryTags: string[]; // e.g., "Vegan", "Gluten-Free"
    specs: ProductSpecs;
    goals: string[]; // e.g., "Muscle Gain", "Weight Loss"
    featured?: boolean;
    ingredients?: string;
    allergenInfo?: string;
    nutrition: {
        protein?: string;
        carbs?: string;
        fat?: string;
        fiber?: string;
        energy?: string;
        sugar?: string;
        [key: string]: string | undefined;
    };
}

export const products: Product[] = [
    {
        id: 'p1',
        name: 'High Protein Chocolate Oats',
        slug: 'high-protein-chocolate-oats',
        sku: 'NTZ-OATS-CHOC-001',
        category: 'Breakfast Cereals',
        subCategory: 'Oats',
        image: '/assets/images/products/product-1.png',
        images: [
            '/assets/images/products/product-1.png',
            '/assets/images/products/product-1.png',
            '/assets/images/products/product-1.png',
            '/assets/images/products/product-1.png'
        ],
        description: 'Rolled Oats enriched with Vegan Protein Blend, Cocoa, and premium Nuts & Seeds. A perfect high-protein breakfast.',
        origin: 'India',
        certifications: ['FSSAI', 'ISO 22000'],
        dietaryTags: ['Vegan', 'High Protein', 'High Fiber'],
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg / 500g',
            hsCode: '1904.10',
            casePack: '12 x 1kg'
        },
        goals: ['Muscle Gain', 'Energy'],
        ingredients: 'Rolled Oats, Vegan Protein Blend (Texurised Soy Protein & Soy Protein Isolate), Nuts Fruit & Seeds(Almonds, Raisins, Chia seeds, Pumpkin Seeds), Jaggery Powder, Cocoa Solids, Natural Identical Flavour(Chocolate), Pink Salt, Antioxidant(INS 320). Contains Added Identical Flavour (Chocolate)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "411.00",
            "Protein": "24.86g",
            "Carbohydrate": "53.98g",
            "Dietary Fiber": "10.00g",
            "Total Sugars": "13.92g",
            "Added Sugars": "11.00g",
            "Total Fats": "10.95g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.10g",
            "Polyunsaturated Fats": "4.30g",
            "Monounsaturated Fats": "4.55g",
            "Sodium": "121.00mg",
            "Cholesterol": "0.00mg",
            "Iron": "6.30mg",
            "Magnesium": "178.00mg"
        },
        featured: true
    },
    {
        id: 'p2',
        name: 'High Protein Coffee Oats',
        slug: 'high-protein-coffee-oats',
        category: 'Breakfast Cereals',
        subCategory: 'Oats',
        image: '/assets/images/products/product-2.png',
        description: 'Energizing Coffee infused Oats with Vegan Protein Blend. High fiber and protein for a powerful start.',
        origin: 'India',
        certifications: ['ISO 9001', 'GMP', 'Vegan Certified'],
        dietaryTags: ['Vegan', 'High Protein', 'High Fiber'],
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg'
        },
        goals: ['Energy', 'Satiety'],
        ingredients: 'Oats, Vegan Protein Blend (Texurised Soy Protein & Soy Protein Isolate), Nuts Fruit & Seeds(Almonds, Raisins, Chia seeds, Pumpkin Seeds), Brown Sugar, Roasted Coffee Powder, Himalyan Pink Salt, Antioxidant(INS 320). Contains Added Identical Flavour (Coffee)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "396.00 Kcal",
            "Protein": "25.00g",
            "Carbohydrate": "43.00g",
            "Dietary Fiber": "11.00g",
            "Total Sugars": "12.00g",
            "Added Sugars": "10.00g",
            "Total Fats": "14.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "3.00g",
            "Sodium": "45.00mg",
            "Cholesterol": "0.00mg"
        },
    },
    {
        id: 'p3',
        name: 'High Protein Strawberry Oats',
        slug: 'high-protein-strawberry-oats',
        category: 'Breakfast Cereals',
        subCategory: 'Oats',
        image: '/assets/images/products/product-3.png',
        description: 'Delicious Strawberry flavored Oats with Vegan Protein Blend. High fiber and protein for a nutritious meal.',
        origin: 'India',
        certifications: ['FSSAI', 'ISO 22000'],
        dietaryTags: ['Vegan', 'High Protein', 'High Fiber'],
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg'
        },
        goals: ['Muscle Gain', 'Weight Management'],
        ingredients: 'Oats, Vegan Protein Blend (Texurised Soy Protein & Soy Protein Isolate), Nuts Fruit & Seeds(Almonds, Raisins, Chia seeds, Pumpkin Seeds), Brown Sugar, Strawberry Powder, Himalyan Pink Salt, Antioxidant(INS 320). Contains Added Identical Flavour (Strawberry)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "396.00 Kcal",
            "Protein": "25.00g",
            "Carbohydrate": "43.00g",
            "Dietary Fiber": "11.00g",
            "Total Sugars": "12.00g",
            "Added Sugars": "10.00g",
            "Total Fats": "14.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "3.00g",
            "Sodium": "45.00mg",
            "Cholesterol": "0.00mg"
        },
        featured: true
    },
    {
        id: 'p4',
        name: 'Mango Chia Peanut Butter',
        slug: 'mango-chia-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/4.png',
        description: 'Unique blend of Roasted Peanuts, Chia Seeds, and Mango Flavour. Rich in healthy fats and protein.',
        origin: 'India',
        certifications: ['HACCP', 'ISO 9001'],
        dietaryTags: ['Vegan', 'High Protein', 'Gluten-Free'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Energy', 'Taste'],
        ingredients: 'Roasted Peanut (79%), Rice Crisp, Milk Solid (SMP&WMP), Sesame Oil, Mango Flavour, Emulsifier E471 (100% Plant Based), Sugar, Antioxidant 322(1). Contains Added Identical Flavour (Mango)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "589.00",
            "Protein": "27.00g",
            "Carbohydrate": "19.00g",
            "Fiber": "7.00g",
            "Total Sugars": "11.00g",
            "Added Sugars": "8.00g",
            "Total Fats": "47.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "7.50g",
            "Polyunsaturated Fats": "14.00g",
            "Monounsaturated Fats": "25.00g",
            "Sodium": "121.00mg",
            "Cholesterol": "0.00mg"
        },
    },
    {
        id: 'p5',
        name: 'Chocolate Almond Peanut Butter',
        slug: 'chocolate-almond-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/5.png',
        description: 'A rich blend of Roasted Peanuts and Almonds with Cocoa. A perfect balance of taste and nutrition.',
        origin: 'India',
        certifications: ['FSSAI', 'ISO 22000'],
        dietaryTags: ['High Protein', 'Gluten-Free'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Energy', 'Taste'],
        ingredients: 'Roasted Peanut (82%), Roasted Almond, Chocolate (Natural Cocoa Powder, Cocoa Butter, Sugar), Emulsifier E471 (100% Plant Based), Himalyan Pink Salt. Contains Added Identical Flavour (Chocolate)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "592.00 Kcal",
            "Protein": "26.00g",
            "Carbohydrate": "26.00g",
            "Dietary Fiber": "5.00g",
            "Total Sugars": "8.50g",
            "Added Sugars": "5.50g",
            "Total Fats": "42.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "8.40g",
            "Polyunsaturated Fats": "14.50g",
            "Monounsaturated Fats": "19.10g",
            "Sodium": "267.00mg",
            "Cholesterol": "0.00mg"
        },
        featured: true
    },
    {
        id: 'p6',
        name: 'Strawberry Chia Peanut Butter',
        slug: 'strawberry-chia-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/6.png',
        description: 'Creamy peanut butter with a fruity twist of Strawberry and crunch of Chia seeds.',
        origin: 'India',
        certifications: ['HACCP', 'ISO 9001'],
        dietaryTags: ['High Protein', 'Gluten-Free'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Taste', 'Snacking'],
        ingredients: 'Roasted Peanut (79%), Rice Crisp, Milk Solid (SMP&WMP), Sesame Oil, Strawberry Flavour, Emulsifier E471 (100% Plant Based), Sugar, Antioxidant 322(1). Contains Added Identical Flavour (Strawberry)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "589.00 Kcal",
            "Protein": "27.00g",
            "Carbohydrate": "19.00g",
            "Fiber": "7.00g",
            "Total Sugars": "11.00g",
            "Added Sugars": "8.00g",
            "Total Fats": "47.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "7.50g",
            "Polyunsaturated Fats": "14.00g",
            "Monounsaturated Fats": "25.00g",
            "Sodium": "121.00mg",
            "Cholesterol": "0.00mg"
        },
    },
    {
        id: 'p7',
        name: 'Cookies & Cream Peanut Butter',
        slug: 'cookies-and-cream-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/7.png',
        description: 'Decadent Cookies & Cream flavour blended with premium Roasted Peanuts.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality'],
        dietaryTags: ['High Protein', 'Vegetarian'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Taste', 'Energy'],
        ingredients: 'Roasted Peanut (79%), Cocoa Solids, Cookies, Milk Solid (SMP&WMP), Sesame Oil, Cookies Flavour, Emulsifier E471 (100% Plant Based), Sugar, Salt. Contains Added Identical Flavour (Cookies)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "607.00 Kcal",
            "Protein": "24.00g",
            "Carbohydrate": "26.00g",
            "Fiber": "7.00g",
            "Total Sugars": "19.00g",
            "Added Sugars": "16.00g",
            "Total Fats": "41.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "8.00g",
            "Polyunsaturated Fats": "14.00g",
            "Monounsaturated Fats": "19.00g",
            "Sodium": "291.00mg",
            "Cholesterol": "0.00mg"
        },
        featured: true
    },
    {
        id: 'p8',
        name: 'Jaggery Peanut Butter',
        slug: 'jaggery-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/8.png',
        description: 'Traditional taste of roasted peanuts sweetened with organic jaggery. A healthy alternative to sugar.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality', 'Organic Friendly'],
        dietaryTags: ['Vegetarian', 'Gluten-Free', 'No Added Sugar'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Taste', 'Energy'],
        ingredients: 'Roasted Peanut (90%), Organoc Jaggery, Emulsifier E471 (100% Plant Based).',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "599.00 Kcal",
            "Protein": "27.00g",
            "Carbohydrate": "22.00g",
            "Fiber": "7.00g",
            "Total Sugars": "8.00g",
            "Added Sugars": "5.00g",
            "Total Fats": "46.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "8.00g",
            "Polyunsaturated Fats": "15.00g",
            "Monounsaturated Fats": "23.00g",
            "Sodium": "197.00mg",
            "Cholesterol": "0.00mg"
        },
        featured: true
    },
    {
        id: 'p9',
        name: 'Mix Fruit Peanut Butter',
        slug: 'mix-fruit-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/9.png',
        description: 'Exotic blend of peanuts with mixed fruit powder and raisin seeds for a unique tangy-sweet flavor.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality'],
        dietaryTags: ['Vegan', 'High Protein', 'Gluten-Free'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g'
        },
        goals: ['Taste', 'Kids Favorite'],
        ingredients: 'Roasted Peanut (79%), Dry Mix Fruit Powder, Raisin Seeds, Milk Solid (SMP&WMP), Sesame Oil, Sugar, Emulsifier E471 (100% Plant Based), Antioxidant. Contains Added Identical Flavour (Mix Fruit)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "601.00 Kcal",
            "Protein": "24.00g",
            "Carbohydrate": "21.00g",
            "Fiber": "8.00g",
            "Total Sugars": "9.20g",
            "Added Sugars": "7.00g",
            "Total Fats": "47.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "8.00g",
            "Polyunsaturated Fats": "14.00g",
            "Monounsaturated Fats": "25.00g",
            "Sodium": "79.00mg",
            "Cholesterol": "0.00mg"
        },
    },
    {
        id: 'p10',
        name: 'Classic Creamy/Crunchy Peanut Butter',
        slug: 'classic-creamy-crunchy-peanut-butter',
        category: 'Nut Butters',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/10.png',
        description: 'The timeless classic. 100% Roasted Peanuts with just a hint of salt and sugar for the perfect balance.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality', 'Halal'],
        dietaryTags: ['Vegan', 'High Protein', 'Gluten-Free'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Jars / Buckets',
            netWeight: '1kg / 500g'
        },
        goals: ['Muscle Gain', 'Staple Diet'],
        ingredients: 'Roasted Peanut (90%), Emulsifier E471 (100% Plant Based), Sugar, Salt.',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "588.00 Kcal",
            "Protein": "26.00g",
            "Carbohydrate": "26.00g",
            "Fiber": "5.00g",
            "Total Sugars": "8.50g",
            "Added Sugars": "5.50g",
            "Total Fats": "40.00g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "8.40g",
            "Polyunsaturated Fats": "13.40g",
            "Monounsaturated Fats": "18.20g",
            "Sodium": "242.00mg",
            "Cholesterol": "0.00mg"
        },
        featured: true
    }
];

// Strict filter categories as requested
export const filterCategories = [
    "Peanut butter",
    "Protein Oats",
    "Muesli",
    "Shilajit",
    "Rice Cake",
    "Protein Bar"
];

export const allCategories = filterCategories; // Backward compatibility if needed temporarily

// Helper function to create URL-friendly slugs
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}

// Helper function to check if a product matches a category filter
export function matchesCategory(product: Product, category: string): boolean {
    if (category === 'Peanut butter') return product.subCategory === 'Peanut Butter';
    if (category === 'Protein Oats') return product.subCategory === 'Oats' && product.name.toLowerCase().includes('protein');
    if (category === 'Muesli') return product.subCategory === 'Muesli' || product.category === 'Muesli';
    if (category === 'Shilajit') return product.subCategory === 'Ayurveda' || product.name.toLowerCase().includes('shilajit');
    if (category === 'Rice Cake') return product.subCategory === 'Rice Cakes' || product.name.toLowerCase().includes('rice cake');
    if (category === 'Protein Bar') return product.subCategory === 'Protein Bars' || product.name.toLowerCase().includes('bar');
    return false;
}

// Get all categories with product counts
export function getCategories() {
    const categoryMap = new Map<string, number>();

    filterCategories.forEach(cat => {
        const count = products.filter(p => matchesCategory(p, cat)).length;
        if (count > 0) {
            categoryMap.set(cat, count);
        }
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
        id: slugify(name),
        name,
        slug: slugify(name),
        count
    }));
}

// Get category by slug
export function getCategoryBySlug(slug: string) {
    const categories = getCategories();
    return categories.find(cat => cat.slug === slug) || null;
}

// Get category name from slug
export function getCategoryNameFromSlug(slug: string): string | null {
    const category = getCategoryBySlug(slug);
    return category ? category.name : null;
}

// Mapping of category slugs to image paths
const categoryImages: Record<string, string> = {
    'breakfast-cereals': '/assets/images/categories/Protein-Oats.png',
    'nut-butters': '/assets/images/categories/Peanut-Butter.png',
};

// Get actual categories from products (not filterCategories)
export function getCategoriesWithProducts() {
    const categoryMap = new Map<string, number>();

    products.forEach(product => {
        const catName = product.category;
        categoryMap.set(catName, (categoryMap.get(catName) || 0) + 1);
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
        id: slugify(name),
        name,
        slug: slugify(name),
        count,
        image: categoryImages[slugify(name)]
    }));
}

// Get products for a specific category by slug
export function getProductsByCategory(categorySlug: string) {
    return products.filter(product => slugify(product.category) === categorySlug);
}

// Get category info by slug
export function getCategoryInfo(slug: string) {
    const categories = getCategoriesWithProducts();
    return categories.find(cat => cat.slug === slug) || null;
}

