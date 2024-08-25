// WishlistItem.tsx
import React from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Image from 'next/image';

// Define the type for a wishlist item
interface WishlistItemProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    onRemove: (id: number) => void;
    onAddToCart: (item: { id: number; name: string; description: string; price: number; image: string; }) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ id, name, description, price, image, onRemove, onAddToCart }) => {
    return (
        <div className="flex flex-col md:flex-row border p-4 rounded-md shadow-sm bg-white">
            <Image src={image} alt={name} height={60} width={60} className="w-full md:w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <Paragraph size="lg" weight="bold">{name}</Paragraph>
                    <Paragraph size="md">{description}</Paragraph>
                    <Paragraph size="md">Price: ${price.toFixed(2)}</Paragraph>
                </div>
                <div className="mt-4 flex space-x-2 gap-2 justify-end">
                    <CustomButton variant="primary" onClick={() => onAddToCart({ id, name, description, price, image })}>
                        Add to Cart
                    </CustomButton>
                    <CustomButton variant="secondary" onClick={() => onRemove(id)}>
                        Remove
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
