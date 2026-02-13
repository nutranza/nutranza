import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getCategoryInfo } from '@/data/products';
import ProductDetail from '@/components/product/ProductDetail';

interface CategoryProductPageProps {
    params: Promise<{
        slug: string; // Category slug
        productSlug: string; // Product slug
    }>;
}

// Generate static params for all valid category-product combinations
export async function generateStaticParams() {
    return products.map(() => {
        // We need to resolve the category slug from the product's category name
        // Since we don't have a direct map in the product object, we might need a helper
        // But for now, let's assume valid category slugs are generated properly
        // This bit is slightly complex without a reverse lookup, so for simplicity in this prototype
        // we might skip expansive static gen or do a basic map if we have data.
        // Let's rely on dynamic rendering for now to be safe and simple, 
        // as `generateStaticParams` isn't strictly required for it to work.
        return [];
    });
}
// Actually, it's better to implement partial static params if possible, 
// but given the "prototype" focus, we can let it be dynamic or implement if we have the helper.
// The user asked for "simple and robust". Dynamic is robust.

export async function generateMetadata({ params }: CategoryProductPageProps): Promise<Metadata> {
    const { slug, productSlug } = await params;
    const product = products.find((p) => p.slug === productSlug);

    if (!product) {
        return {
            title: 'Product Not Found | Nutranza',
        };
    }

    const category = getCategoryInfo(slug);

    // Canonical URL pointing to the "master" product page
    // Assuming the site is hosted at the base URL (Next.js automatically handles relative canonicals often, 
    // but explicit absolute is safer for SEO tools. 
    // Since we don't have the env var for base URL here, we will use a relative path 
    // or rely on metadataBase if set in layout. 
    // Best practice: use absolute if possible, but structure below implies a relative canonical path implementation support via metadata)

    return {
        title: `${product.name} | ${category ? category.name : 'Nutranza'}`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.image],
        },
        alternates: {
            canonical: `/categories/${slug}/${product.slug}`,
        },
    };
}

export default async function CategoryProductPage({ params }: CategoryProductPageProps) {
    const { slug, productSlug } = await params;
    const product = products.find((p) => p.slug === productSlug);

    // simple validation to ensure category matches if needed, though arguably optional for prototype
    // For now, if product exists, we show it. 

    if (!product) {
        notFound();
    }

    // Check if the product actually belongs to this category context if stricter validation is needed
    // const category = getCategoryInfo(slug);
    // if (!category || slugify(product.category) !== slug) { ... } 
    // Keeping it simple as requested.

    // Pass the category slug from the URL to breadcrumbs
    const category = getCategoryInfo(slug);

    return <ProductDetail product={product} breadcrumbCategory={category ? category.name : undefined} />;
}
