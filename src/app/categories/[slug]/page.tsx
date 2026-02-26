import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoriesWithProducts, getProductsByCategory, getCategoryInfo } from '@/data/products';
import CategoryProductsContent from '@/components/categories/CategoryProductsContent';
import type { CategoryPageProps } from '@/types/products';
import WaveDecoration from '@/components/ui/WaveDecoration';

// Generate static paths at build time for all categories
export async function generateStaticParams() {
    const categories = getCategoriesWithProducts();
    return categories.map(cat => ({ slug: cat.slug }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryInfo(slug);

    if (!category) {
        return {
            title: 'Category Not Found | Nutranza',
        };
    }

    return {
        title: `${category.name} | Nutranza Export Catalog`,
        description: `Browse our premium ${category.name} products for export. ${category.count} products available. High quality, certified health food products from India.`,
        openGraph: {
            title: `${category.name} | Nutranza`,
            description: `Explore ${category.count} ${category.name} products available for global export markets.`,
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = getCategoryInfo(slug);

    if (!category) {
        notFound();
    }

    const categoryProducts = getProductsByCategory(slug);

    return (
        <main>
            <section className='bg-[#FEFDF7] sm:pt-36 pt-32 lg:pb-20 pb-16 relative z-10 -my-0.5'>
                <div className="container">
                    <CategoryProductsContent
                        categoryProducts={categoryProducts}
                        categoryName={category.name}
                        categorySlug={category.slug}
                    />
                </div>
            </section>
            {/* Wave Decoration connecting to Footer */}
            <WaveDecoration
                position="bottom"
                color="text-[#FEFDF7]"
                className="bg-[#EBE6DE]"
            />
        </main>
    );
}
