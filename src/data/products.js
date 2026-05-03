import chandelier from "@/assets/product-chandelier.jpg";
import ceiling from "@/assets/product-ceiling.jpg";
import pendant from "@/assets/product-pendant.jpg";
import wall from "@/assets/product-wall.jpg";
import outdoor from "@/assets/product-outdoor.jpg";
import decor from "@/assets/product-decor.jpg";

export const products = [
  {
    id: "crystal-chandelier",
    name: "Royal Crystal Chandelier",
    category: "Chandeliers",
    price: "₦185,000",
    description: "Statement crystal chandelier with golden frame — the centerpiece your space deserves.",
    image: chandelier,
  },
  {
    id: "led-ceiling",
    name: "Modern LED Ceiling Light",
    category: "Ceiling Lights",
    price: "₦25,000",
    description: "Stylish, energy-saving ceiling light perfect for modern homes and offices.",
    image: ceiling,
  },
  {
    id: "gold-pendant",
    name: "Brass Pendant Light",
    category: "Pendant Lights",
    price: "₦42,000",
    description: "Warm Edison-bulb pendant ideal for kitchen islands and dining areas.",
    image: pendant,
  },
  {
    id: "wall-bracket",
    name: "Architect Wall Bracket",
    category: "Wall Lights",
    price: "₦18,500",
    description: "Sculptural up-and-down wall light for entrances, hallways and feature walls.",
    image: wall,
  },
  {
    id: "outdoor-flood",
    name: "Outdoor Security Flood",
    category: "Outdoor Lights",
    price: "₦32,000",
    description: "Bright, weatherproof flood light to keep your perimeter safe and elegant.",
    image: outdoor,
  },
  {
    id: "geo-decor",
    name: "Geometric Decorative Light",
    category: "Decorative",
    price: "₦55,000",
    description: "Brass geometric piece — pure sculpture by day, warm glow by night.",
    image: decor,
  },
];

export const categories = [
  "All",
  "Ceiling Lights",
  "Chandeliers",
  "Pendant Lights",
  "Wall Lights",
  "Outdoor Lights",
  "Decorative",
];
