import ProductCard from "../../composites/product/productCard";
import SectionTitle from "../../composites/home/sectionTitle";
import ScrollContainer from "../../composites/shared/ScrollContainer";

const BestSelling = () => {
  return (
    <div className="md:my-32 md:px-32 my-32 px-4">
        <SectionTitle smallTitle="This Month" largeTitle="Best Selling Products"/>
        <ScrollContainer scrollAmount={300} buttonSize={18}>
        <div className="p-24 grid grid-cols-1 md:grid-cols-4 gap-6">
      <ProductCard
        productId="12345" // This should be the dynamic product ID
        title="Product 8"
        price="UGX 17,000.00"
        imageSrc="/assets/p004.webp" // Replace with your actual image path
        rating={4}
        reviewsCount={88}
      />
      <ProductCard
        productId="12345" // This should be the dynamic product ID
        title="Product 8"
        price="UGX 17,000.00"
        imageSrc="/assets/p004.webp" // Replace with your actual image path
        rating={4}
        reviewsCount={88}
      />
      <ProductCard
        productId="12345" // This should be the dynamic product ID
        title="Product 8"
        price="UGX 17,000.00"
        imageSrc="/assets/p004.webp" // Replace with your actual image path
        rating={4}
        reviewsCount={88}
      />
      <ProductCard
        productId="12345" // This should be the dynamic product ID
        title="Product 8"
        price="UGX 17,000.00"
        imageSrc="/assets/p004.webp" // Replace with your actual image path
        rating={4}
        reviewsCount={88}
      />
      {/* Add more ProductCard components here */}
    </div>
    </ScrollContainer>
    </div>
  );
};

export default BestSelling;
