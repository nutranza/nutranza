export interface ProductSpecs {
    form: string;
    shelfLife: string;
    moq: string; // Minimum Order Quantity
    packaging?: string;
    netWeight?: string;
    servingSize?: string; // e.g. '40gm'
    hsCode?: string; // HS Code for export
    casePack?: string; // Case packaging info
}

export interface KeyBenefit {
    icon: string;
    text: string;
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
    specs: ProductSpecs;
    tags: string[]; // e.g., "Energy Booster", "0% Cholesterol"
    keyBenefits?: KeyBenefit[]; // e.g. [{ icon: '💪', text: '18g Protein' }]
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
    nutritionPerServe?: {
        [key: string]: string | undefined;
    };
    nutritionRDA?: {
        [key: string]: string | undefined; // %RDA Per Serve
    };
    colorConfig?: {
        bg: string;
        titleColor: string;
        buttonBg: string;
    };
    themeColor?: string; // e.g. '#355cdd' for dynamic UI rendering
}

export const products: Product[] = [
    {
        id: 'p1',
        name: 'High Protein Chocolate Oats',
        slug: 'high-protein-chocolate-oats',
        category: 'Protein Oats',
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
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg / 500g',
            servingSize: '40gm',
            hsCode: '1904.10',
            casePack: '12 x 1kg'
        },
        tags: ['Vegan', 'High Protein', 'High Fiber', 'Energy Booster', 'Low in Carbs', 'Muscle Gain'],
        keyBenefits: [
            { icon: '💪', text: '24.86g of Protein per 100g' },
            { icon: '🌿', text: 'Rich in Dietary Fiber' },
            { icon: '🚫', text: 'Zero Added Sugar' },
            { icon: '🍫', text: 'Premium Cocoa & Nuts' },
            { icon: '⚡', text: 'Clean Energy Booster' }
        ],
        ingredients: 'Rolled Oats, Vegan Protein Blend (Texurised Soy Protein & Soy Protein Isolate), Nuts Fruit & Seeds(Almonds, Raisins, Chia seeds, Pumpkin Seeds), Jaggery Powder, Cocoa Solids, Natural Identical Flavour(Chocolate), Pink Salt, Antioxidant(INS 320). Contains Added Identical Flavour (Chocolate)',
        allergenInfo: 'Contains Peanuts',
        nutrition: {
            "Energy": "411.00 Kcal",
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
        nutritionPerServe: {
            "Energy": "164.40 Kcal",
            "Protein": "9.94g",
            "Carbohydrate": "21.59g",
            "Dietary Fiber": "4.00g",
            "Total Sugars": "5.57g",
            "Added Sugars": "4.40g",
            "Total Fats": "4.38g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "0.84g",
            "Polyunsaturated Fats": "1.72g",
            "Monounsaturated Fats": "1.82g",
            "Sodium": "48.40mg",
            "Cholesterol": "0.00mg",
            "Iron": "2.52mg",
            "Magnesium": "71.20mg"
        },
        nutritionRDA: {
            "Energy": "10.28%",
            "Protein": "23.07%",
            "Dietary Fiber": "11.50%",
            "Added Sugars": "0.28%",
            "Total Fats": "8.17%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "4.80%",
            "Sodium": "3.25%",
            "Iron": "16.59%",
            "Magnesium": "20.22%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#5471d2,#7da0f2)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#355cdd]'
        },
        themeColor: '#355cdd'
    },
    {
        id: 'p2',
        name: 'High Protein Coffee Oats',
        slug: 'high-protein-coffee-oats',
        category: 'Protein Oats',
        subCategory: 'Oats',
        image: '/assets/images/products/product-2.png',
        description: 'Energizing Coffee infused Oats with Vegan Protein Blend. High fiber and protein for a powerful start.',
        origin: 'India',
        certifications: ['ISO 9001', 'GMP', 'Vegan Certified'],
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg',
            servingSize: '40gm'
        },
        tags: ['Vegan', 'High Protein', 'High Fiber', 'Energy Booster', 'Rich in Antioxidants', 'Satiety'],
        keyBenefits: [
            { icon: '💪', text: '25.00g of Protein per 100g' },
            { icon: '🌿', text: 'Rich in Dietary Fiber' },
            { icon: '🚫', text: 'Zero Added Sugar' },
            { icon: '☕', text: 'Energizing Roasted Coffee' },
            { icon: '🛡️', text: 'Rich in Antioxidants' }
        ],
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
        nutritionPerServe: {
            "Energy": "158.40 Kcal",
            "Protein": "10.00g",
            "Carbohydrate": "17.20g",
            "Dietary Fiber": "4.40g",
            "Total Sugars": "4.80g",
            "Added Sugars": "4.00g",
            "Total Fats": "5.60g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "1.20g",
            "Sodium": "18.00mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "7.92%",
            "Protein": "18.52%",
            "Dietary Fiber": "14.67%",
            "Added Sugars": "8.00%",
            "Total Fats": "8.36%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "5.45%",
            "Sodium": "0.90%"
        },
        colorConfig: {
            bg: 'bg-[linear-gradient(#8d5a41,#b58066)]',
            titleColor: 'text-white',
            buttonBg: 'bg-accent'
        },
        themeColor: '#8d5a41'
    },
    {
        id: 'p3',
        name: 'High Protein Strawberry Oats',
        slug: 'high-protein-strawberry-oats',
        category: 'Protein Oats',
        subCategory: 'Oats',
        image: '/assets/images/products/product-3.png',
        description: 'Delicious Strawberry flavored Oats with Vegan Protein Blend. High fiber and protein for a nutritious meal.',
        origin: 'India',
        certifications: ['FSSAI', 'ISO 22000'],
        specs: {
            form: 'Flakes',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Pouches / Boxes',
            netWeight: '1kg',
            servingSize: '40gm'
        },
        tags: ['Vegan', 'High Protein', 'High Fiber', 'Aids Weight Management', 'Vitamins & Minerals', 'Muscle Gain'],
        keyBenefits: [
            { icon: '💪', text: '25.00g of Protein per 100g' },
            { icon: '🌿', text: 'Rich in Dietary Fiber' },
            { icon: '🚫', text: 'Zero Added Sugar' },
            { icon: '🍓', text: 'Real Strawberry Flavor' },
            { icon: '🛡️', text: 'Immunity Support' }
        ],
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
        nutritionPerServe: {
            "Energy": "158.40 Kcal",
            "Protein": "10.00g",
            "Carbohydrate": "17.20g",
            "Dietary Fiber": "4.40g",
            "Total Sugars": "4.80g",
            "Added Sugars": "4.00g",
            "Total Fats": "5.60g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "1.20g",
            "Sodium": "18.00mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "7.92%",
            "Protein": "18.52%",
            "Dietary Fiber": "14.67%",
            "Added Sugars": "8.00%",
            "Total Fats": "8.36%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "5.45%",
            "Sodium": "0.90%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#d64d56,#f38990)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#eb3c47]'
        },
        themeColor: '#eb3c47'
    },
    {
        id: 'p4',
        name: 'Mango Crispy',
        slug: 'mango-crispy',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/4.png',
        description: 'Unique blend of Roasted Peanuts with Rice Crisp and Mango Flavour. Rich in healthy fats and protein with a satisfying crunch.',
        origin: 'India',
        certifications: ['HACCP', 'ISO 9001'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['Vegan', 'High Protein', 'Healthy Fats', '0% Cholesterol', 'Energy Booster', 'Taste'],
        keyBenefits: [
            { icon: '💪', text: '27.00g of Protein per 100g' },
            { icon: '🌿', text: 'Rich in Dietary Fiber' },
            { icon: '🚫', text: 'Zero Added Sugar' },
            { icon: '🥭', text: 'Real Mango Infusion' },
            { icon: '✨', text: 'Satisfying Crunchy Texture' }
        ],
        ingredients: 'Roasted Peanut (79%), Rice Crisp, Milk Solid (SMP&WMP), Sesame Oil, Mango Flavour, Emulsifier E471 (100% Plant Based), Sugar, Antioxidant 322(1). Contains Added Identical Flavour (Mango)',
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
        nutritionPerServe: {
            "Energy": "188.48 Kcal",
            "Protein": "8.64g",
            "Carbohydrate": "6.08g",
            "Fiber": "2.24g",
            "Total Sugars": "3.52g",
            "Added Sugars": "2.56g",
            "Total Fats": "15.04g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.40g",
            "Polyunsaturated Fats": "4.48g",
            "Monounsaturated Fats": "8.00g",
            "Sodium": "38.72mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.42%",
            "Total Sugars": "7.04%",
            "Added Sugars": "5.12%",
            "Total Fats": "22.45%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "10.91%",
            "Sodium": "1.94%"
        },
        colorConfig: {
            bg: 'bg-[linear-gradient(#ca8a04,#facc15)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#a16207]'
        },
        themeColor: '#a16207'
    },
    {
        id: 'p5',
        name: 'Chocolate Almond',
        slug: 'chocolate-almond',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/5.png',
        description: 'A rich blend of Roasted Peanuts and Almonds with Cocoa. A perfect balance of taste and nutrition.',
        origin: 'India',
        certifications: ['FSSAI', 'ISO 22000'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['High Protein', 'Heart Healthy', '0% Cholesterol', 'Energy', 'Taste'],
        keyBenefits: [
            { icon: '💪', text: '26.00g of Protein per 100g' },
            { icon: '❤️', text: 'Heart Healthy Almonds' },
            { icon: '🚫', text: '0% Cholesterol' },
            { icon: '🍫', text: 'Premium Cocoa Blend' },
            { icon: '⚡', text: 'Essential Healthy Fats' }
        ],
        ingredients: 'Roasted Peanut (82%), Roasted Almond, Chocolate (Natural Cocoa Powder, Cocoa Butter, Sugar), Emulsifier E471 (100% Plant Based), Himalayan Pink Salt. Contains Added Identical Flavour (Chocolate)',
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
        nutritionPerServe: {
            "Energy": "189.44 Kcal",
            "Protein": "8.32g",
            "Carbohydrate": "8.32g",
            "Dietary Fiber": "1.64g",
            "Total Sugars": "2.72g",
            "Added Sugars": "1.76g",
            "Total Fats": "13.44g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.69g",
            "Polyunsaturated Fats": "4.64g",
            "Monounsaturated Fats": "6.11g",
            "Sodium": "85.44mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.47%",
            "Total Sugars": "5.44%",
            "Added Sugars": "3.52%",
            "Total Fats": "20.06%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "12.22%",
            "Sodium": "4.27%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#273b82,#4862b5)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#1b2a5d]'
        },
        themeColor: '#1b2a5d'
    },
    {
        id: 'p6',
        name: 'Strawberry Chia',
        slug: 'strawberry-chia',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/6.png',
        description: 'Creamy peanut butter with a fruity twist of Strawberry and crunch of Chia seeds.',
        origin: 'India',
        certifications: ['HACCP', 'ISO 9001'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['High Protein', 'Omega-3 Rich', 'Vitamins & Minerals', 'Snacking'],
        keyBenefits: [
            { icon: '💪', text: '27.00g of Protein per 100g' },
            { icon: '✨', text: 'Omega-3 Rich Chia Seeds' },
            { icon: '🍓', text: 'Real Strawberry Twist' },
            { icon: '🛡️', text: 'Vitamins & Minerals' },
            { icon: '🌿', text: 'Plant-Based Goodness' }
        ],
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
        nutritionPerServe: {
            "Energy": "188.48 Kcal",
            "Protein": "8.64g",
            "Carbohydrate": "6.08g",
            "Fiber": "2.24g",
            "Total Sugars": "3.52g",
            "Added Sugars": "2.56g",
            "Total Fats": "15.04g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.40g",
            "Polyunsaturated Fats": "4.48g",
            "Monounsaturated Fats": "8.00g",
            "Sodium": "38.72mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.42%",
            "Total Sugars": "7.04%",
            "Added Sugars": "5.12%",
            "Total Fats": "22.45%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "10.91%",
            "Sodium": "1.94%"
        },
        colorConfig: {
            bg: 'bg-[linear-gradient(#d64d56,#f38990)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#eb3c47]'
        },
        themeColor: '#eb3c47'
    },
    {
        id: 'p7',
        name: 'Cookies & Cream',
        slug: 'cookies-and-cream',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/7.png',
        description: 'Decadent Cookies & Cream favour blended with premium Roasted Peanuts.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['High Protein', 'Vegetarian', 'Energy Booster', 'Healthy Fats', 'No Palm Oil', 'Taste'],
        keyBenefits: [
            { icon: '💪', text: '24.00g of Protein per 100g' },
            { icon: '🍪', text: 'Real Cookie Bits' },
            { icon: '🚫', text: 'No Palm Oil' },
            { icon: '⚡', text: 'Instant Energy Booster' },
            { icon: '✨', text: '0% Trans Fat' }
        ],
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
        nutritionPerServe: {
            "Energy": "194.24 Kcal",
            "Protein": "7.68g",
            "Carbohydrate": "8.32g",
            "Fiber": "2.24g",
            "Total Sugars": "6.08g",
            "Added Sugars": "5.12g",
            "Total Fats": "13.12g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.56g",
            "Polyunsaturated Fats": "4.48g",
            "Monounsaturated Fats": "6.08g",
            "Sodium": "93.12mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.71%",
            "Total Sugars": "12.16%",
            "Added Sugars": "10.24%",
            "Total Fats": "19.58%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "11.64%",
            "Sodium": "4.66%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#273b82,#4862b5)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#1b2a5d]'
        },
        themeColor: '#1b2a5d'
    },
    {
        id: 'p8',
        name: 'Jaggery',
        slug: 'jaggery',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/8.png',
        description: 'Traditional taste of roasted peanuts sweetened with organic jaggery. A healthy alternative to sugar.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality', 'Organic Friendly'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['Vegetarian', 'No Added Sugar', 'Iron Rich', '0% Cholesterol', '100% Natural Sweetener', 'Energy'],
        keyBenefits: [
            { icon: '💪', text: '27.00g of Protein per 100g' },
            { icon: '🍯', text: 'Organic Jaggery Sweetened' },
            { icon: '🚫', text: 'No Refined Sugar' },
            { icon: '🩸', text: 'Iron Rich Formula' },
            { icon: '🥜', text: '90% Roasted Peanuts' }
        ],
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
        nutritionPerServe: {
            "Energy": "191.68 Kcal",
            "Protein": "8.64g",
            "Carbohydrate": "7.04g",
            "Fiber": "2.24g",
            "Total Sugars": "2.56g",
            "Added Sugars": "1.60g",
            "Total Fats": "14.72g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.56g",
            "Polyunsaturated Fats": "4.80g",
            "Monounsaturated Fats": "7.36g",
            "Sodium": "63.04mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.58%",
            "Total Sugars": "5.12%",
            "Added Sugars": "3.20%",
            "Total Fats": "21.97%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "11.64%",
            "Sodium": "3.15%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#d4a373,#e6ccb2)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#b08960]'
        },
        themeColor: '#b08960'
    },
    {
        id: 'p9',
        name: 'Mix Fruit With Raisin',
        slug: 'mix-fruit-with-raisin',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/9.png',
        description: 'Exotic blend of peanuts with mixed fruit powder and raisin seeds for a unique tangy-sweet flavor.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '200 kg',
            packaging: 'Jars',
            netWeight: '500g',
            servingSize: '32gm'
        },
        tags: ['Vegan', 'High Protein', 'Vitamins & Minerals', 'Antioxidant Rich', '0% Cholesterol', 'Kids Favorite'],
        keyBenefits: [
            { icon: '💪', text: '24.00g of Protein per 100g' },
            { icon: '🍇', text: 'Real Raisins & Fruit' },
            { icon: '✨', text: 'Rich in Antioxidants' },
            { icon: '🍊', text: 'Vitamins & Minerals' },
            { icon: '🧒', text: 'Kids Favorite Choice' }
        ],
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
        nutritionPerServe: {
            "Energy": "192.32 Kcal",
            "Protein": "7.68g",
            "Carbohydrate": "6.72g",
            "Fiber": "2.56g",
            "Total Sugars": "2.94g",
            "Added Sugars": "2.24g",
            "Total Fats": "15.04g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.56g",
            "Polyunsaturated Fats": "4.48g",
            "Monounsaturated Fats": "8.00g",
            "Sodium": "25.28mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.42%",
            "Total Sugars": "7.04%",
            "Added Sugars": "5.12%",
            "Total Fats": "22.45%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "10.91%",
            "Sodium": "1.94%"
        },
        colorConfig: {
            bg: 'bg-[linear-gradient(#a3252d,#cc3640)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#7c1b21]'
        },
        themeColor: '#7c1b21'
    },
    {
        id: 'p10',
        name: 'Classic Creamy/Crunchy',
        slug: 'classic-creamy-crunchy',
        category: 'Peanut Butter',
        subCategory: 'Peanut Butter',
        image: '/assets/images/products/10.png',
        description: 'The timeless classic. 100% Roasted Peanuts with just a hint of salt and sugar for the perfect balance.',
        origin: 'India',
        certifications: ['FSSAI', 'Export Quality', 'Halal'],
        specs: {
            form: 'Paste',
            shelfLife: '12 Months',
            moq: '500 kg',
            packaging: 'Jars / Buckets',
            netWeight: '1kg / 500g',
            servingSize: '32gm'
        },
        tags: ['Vegan', 'High Protein', '0% Cholesterol', 'Healthy Fats', 'Muscle Gain', 'Staple Diet'],
        keyBenefits: [
            { icon: '💪', text: '26.00g of Protein per 100g' },
            { icon: '🥜', text: '90% Roasted Peanuts' },
            { icon: '🚫', text: 'Zero Trans Fat' },
            { icon: '🛡️', text: 'Rich in Dietary Fiber' },
            { icon: '🌿', text: '100% Plant Based' }
        ],
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
        nutritionPerServe: {
            "Energy": "188.16 Kcal",
            "Protein": "8.32g",
            "Carbohydrate": "8.32g",
            "Fiber": "1.60g",
            "Total Sugars": "2.72g",
            "Added Sugars": "1.76g",
            "Total Fats": "12.80g",
            "Trans Fat": "0.00g",
            "Saturated Fat": "2.69g",
            "Polyunsaturated Fats": "4.29g",
            "Monounsaturated Fats": "5.82g",
            "Sodium": "77.44mg",
            "Cholesterol": "0.00mg"
        },
        nutritionRDA: {
            "Energy": "9.41%",
            "Total Sugars": "5.44%",
            "Added Sugars": "3.52%",
            "Total Fats": "19.10%",
            "Trans Fat": "0.00%",
            "Saturated Fat": "12.22%",
            "Sodium": "3.87%"
        },
        featured: true,
        colorConfig: {
            bg: 'bg-[linear-gradient(#4a7c59,#68a078)]',
            titleColor: 'text-white',
            buttonBg: 'bg-[#366042]'
        },
        themeColor: '#366042'
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
    'protein-oats': '/assets/images/categories/Protein-Oats-1.png',
    'peanut-butter': '/assets/images/categories/Peanut-Butter(1).png',
};

// Mapping of category slugs to descriptions
const categoryDescriptions: Record<string, string> = {
    'protein-oats': 'Fuel your mornings with high-performance goodness. Available in multiple flavors.',
    'peanut-butter': 'Rich, creamy, and packed with natural protein. Explore different varieties.',
};

// Get actual categories from products with images and counts
export function getCategoriesWithProducts() {
    const categoryMap = new Map<string, number>();

    products.forEach(product => {
        const catName = product.category;
        categoryMap.set(catName, (categoryMap.get(catName) || 0) + 1);
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => {
        const slug = slugify(name);
        return {
            id: slug,
            name,
            slug,
            count,
            image: categoryImages[slug],
            description: categoryDescriptions[slug] || `Explore premium ${name.toLowerCase()} for your health.`
        };
    });
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
