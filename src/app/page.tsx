"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Products", id: "products" },
        { name: "Features", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="CrispyCrunch"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Unleash the Ultimate Crunch"
      description="Hand-crafted from the finest farm-fresh potatoes, our chips deliver a snacking experience like no other."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 1" },
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 2" },
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 3" },
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 4" },
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 5" },
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 6" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 1" },
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 2" },
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 3" },
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 4" },
        { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-crispy-chips-uncooked-potatoes-wooden-cutting-board-gray-table_140725-86978.jpg", imageAlt: "Hero 5" },
        { imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-table_140725-140253.jpg", imageAlt: "Hero 6" },
      ]}
      buttons={[{ text: "Shop Now", href: "#products" }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/front-view-young-female-holding-basket-with-potato-chips-blue-surface_140725-69573.jpg", alt: "Customer 1" },
        { src: "http://img.b2bpic.net/free-photo/food-blogger-healthy-fitness-chef-recording-video-social-media-shredding-carrot_140725-166742.jpg", alt: "Customer 2" },
        { src: "http://img.b2bpic.net/free-photo/smiling-caucasian-female-model-eating-fancy-cupcake-outdoor-summer-cafeteria_291650-647.jpg", alt: "Customer 3" },
        { src: "http://img.b2bpic.net/free-photo/vertical-shot-curly-haired-beautiful-woman-bites-pastries-with-appetite-winks-eye-keeps-mouth-widely-opened-addiction-sugar-sweet-food-wears-casual-t-shirt-unhealthy-eating-concept_273609-62637.jpg", alt: "Customer 4" },
        { src: "http://img.b2bpic.net/free-photo/front-view-young-female-holding-basket-with-potato-chips-blue-surface_140725-69573.jpg", alt: "Customer 5" },
      ]}
      avatarText="Loved by 10,000+ snackers"
      marqueeItems={[
        { type: "text", text: "100% NATURAL" },
        { type: "text", text: "SMALL BATCH" },
        { type: "text", text: "NON-GMO" },
        { type: "text", text: "ECO-FRIENDLY" },
        { type: "text", text: "ARTISAN QUALITY" },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Classic Sea Salt", price: "$4.99", imageSrc: "http://img.b2bpic.net/free-photo/black-white-cookies-package_140725-4381.jpg" },
        { id: "p2", name: "Spicy Jalapeno", price: "$5.49", imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-snacks-popcorn-rusks-cips-dark-surface_140725-90977.jpg" },
        { id: "p3", name: "Truffle & Parmesan", price: "$6.99", imageSrc: "http://img.b2bpic.net/free-photo/side-view-delicious-homemade-chips-newspaper-gray-table_140725-87115.jpg" },
      ]}
      title="Our Signature Flavors"
      description="From classic sea salt to bold adventurous flavors, find your perfect crunch."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Farm Fresh", description: "Sourced from locally managed sustainable farms.", tag: "Quality", imageSrc: "http://img.b2bpic.net/free-photo/top-view-potatoes-with-copy-space_23-2148622486.jpg" },
        { id: "f2", title: "Small Batch Crafted", description: "Made in small batches to ensure consistent perfection.", tag: "Craft", imageSrc: "http://img.b2bpic.net/free-photo/side-view-dough-with-flour-sieve-human-hand_176474-3069.jpg" },
        { id: "f3", title: "Eco-Friendly", description: "Compostable packaging for a greener planet.", tag: "Eco", imageSrc: "http://img.b2bpic.net/free-photo/top-view-chocolate-chip-cookies-with-cereals-nuts-cocoa-tied-with-rope-wooden_141793-6345.jpg" },
      ]}
      title="Why Choose CrispyCrunch?"
      description="We are committed to quality in every bag."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "100%", title: "Natural Ingredients", items: ["No preservatives", "Non-GMO", "Vegan friendly"] },
        { id: "m2", value: "50+", title: "Local Farms", items: ["Sustainable sourcing", "Fair trade", "Family owned"] },
        { id: "m3", value: "1M+", title: "Bags Sold", items: ["Loved by foodies", "Global reach", "High satisfaction"] },
      ]}
      title="The Numbers Behind the Crunch"
      description="Quality you can measure."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="I have never tasted chips so crispy and full of flavor. The Truffle one is life-changing!"
      rating={5}
      author="Sarah Jenkins"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/front-view-young-female-holding-basket-with-potato-chips-blue-surface_140725-69573.jpg", alt: "User 1" },
        { src: "http://img.b2bpic.net/free-photo/food-blogger-healthy-fitness-chef-recording-video-social-media-shredding-carrot_140725-166742.jpg", alt: "User 2" },
        { src: "http://img.b2bpic.net/free-photo/smiling-caucasian-female-model-eating-fancy-cupcake-outdoor-summer-cafeteria_291650-647.jpg", alt: "User 3" },
        { src: "http://img.b2bpic.net/free-photo/vertical-shot-curly-haired-beautiful-woman-bites-pastries-with-appetite-winks-eye-keeps-mouth-widely-opened-addiction-sugar-sweet-food-wears-casual-t-shirt-unhealthy-eating-concept_273609-62637.jpg", alt: "User 4" },
        { src: "http://img.b2bpic.net/free-photo/front-view-young-female-holding-basket-with-potato-chips-blue-surface_140725-69573.jpg", alt: "User 5" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "faq1", title: "Where can I buy?", content: "We are available in local supermarkets." },
        { id: "faq2", title: "Are they gluten free?", content: "Yes, all our chips are gluten-free certified." },
        { id: "faq3", title: "Do you ship internationally?", content: "We currently ship within the domestic region only." },
      ]}
      ctaTitle="Stay Crunchy"
      ctaDescription="Join our newsletter for exclusive flavors and deals."
      ctaButton={{ text: "Subscribe Now", href: "#" }}
      ctaIcon={ArrowRight}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Company",          items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }],
        },
        {
          title: "Support",          items: [{ label: "FAQ", href: "#" }, { label: "Contact", href: "#" }],
        },
      ]}
      copyrightText="© 2024 CrispyCrunch Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
