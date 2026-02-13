import localFont from "next/font/local";

/**
 * Quicksand Font Family
 * Used for: Headings (h1-h6)
 * Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
 */
export const quicksand = localFont({
    src: [
        {
            path: "../app/fonts/Quicksand-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/Quicksand-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/Quicksand-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/Quicksand-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../app/fonts/Quicksand-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-quicksand",
    display: "swap",
});

/**
 * Boogaloo Font Family
 * Used for: Secondary headings / decorative text
 * Weights: 400 (Regular)
 */
export const boogaloo = localFont({
    src: [
        {
            path: "../app/fonts/Boogaloo-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-boogaloo",
    display: "swap",
});

/**
 * Open Sans Font Family
 * Used for: Body text and general content
 * Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
 * Includes: Italic variant
 */
export const openSans = localFont({
    src: [
        {
            path: "../app/fonts/OpenSans-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../app/fonts/OpenSans-Italic.ttf",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-opensans",
    display: "swap",
});

/**
 * Helvetica Neue Cyr Font Family
 * Used for: Modern, clean typography
 * Weights: 100 (Thin), 300 (Light), 400 (Roman), 500 (Medium), 700 (Bold), 800 (Heavy), 900 (Black)
 */
export const helveticaNeueCyr = localFont({
    src: [
        {
            path: "../app/fonts/HelveticaNeueCyr-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Roman.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Heavy.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../app/fonts/HelveticaNeueCyr-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-helvetica-neue",
    display: "swap",
});

/**
 * RocaOne Font Family
 * Used for: Display text and branding
 * Weights: 100 (Thin), 300 (Light), 400 (Regular), 400 italic (Italic), 700 (Bold), 800 (Heavy), 900 (Black)
 */
export const rocaOne = localFont({
    src: [
        {
            path: "../app/fonts/RocaOne-Th.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../app/fonts/RocaOne-Lt.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/RocaOne-Rg.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/RocaOne-It.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../app/fonts/RocaOne-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../app/fonts/RocaOne-Hv.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../app/fonts/RocaOne-Bl.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-roca-one",
    display: "swap",
});

