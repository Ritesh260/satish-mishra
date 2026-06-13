import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import Categories from "@/components/blog/Categories";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogView() {
  return (
    <>
      <Navbar />

      <BlogHero />

      <FeaturedPost />

      <Categories />

      <BlogGrid />

      <Footer />
    </>
  );
}