import Link from 'next/link';
import CustomLink from '../../primitives/Link';
const SideNav = () => {
  return (
    <nav className="w-64 bg-gray-100 p-4 shadow-md">
      <ul className="space-y-4">
        <li><CustomLink href="/profile" variant='text'>User Profile</CustomLink></li>
        <li><CustomLink href="/change-password" variant='text'>Change Password</CustomLink></li>
        <li><CustomLink href="/address-book" variant='text'>Address Book</CustomLink></li>
        <li><CustomLink href="/payment-methods" variant='text'>Payment Methods</CustomLink></li>
        <li><CustomLink href="/order-history" variant='text'>Order History</CustomLink></li>
        <li><CustomLink href="/wishlist" variant='text'>Wishlist</CustomLink></li>
        <li><CustomLink href="/logout" variant='text'>Logout</CustomLink></li>
      </ul>
    </nav>
  );
};

export default SideNav;
