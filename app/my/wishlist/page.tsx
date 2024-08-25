// Wishlist.tsx
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import Paragraph from '@/app/ui/primitives/Paragraph';
import WishlistItem from './wishListItem';

// Define the type for a wishlist item
interface WishlistItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

// Sample data for the wishlist
const initialWishlist: WishlistItem[] = [
    { id: 1, name: 'Product A', description: 'Description for Product A', price: 29.99, image: '/path/to/product-a.jpg' },
    { id: 2, name: 'Product B', description: 'Description for Product B', price: 49.99, image: '/path/to/product-b.jpg' },
    { id: 3, name: 'Product C', description: 'Description for Product C', price: 19.99, image: '/path/to/product-c.jpg' },
];

const Wishlist: React.FC = () => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);

    const handleRemoveItem = (id: number) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    const handleAddToCart = (item: WishlistItem) => {
        // Handle adding item to cart logic here
        console.log('Add to cart:', item);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

            <div className="space-y-4">
                {wishlist.length === 0 ? (
                    <Paragraph size="lg">Your wishlist is empty.</Paragraph>
                ) : (
                    wishlist.map(item => (
                        <WishlistItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            onRemove={handleRemoveItem}
                            onAddToCart={handleAddToCart}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;