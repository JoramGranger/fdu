import CustomLink from '../../primitives/Link';

interface UserSideNavProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

const UserSideNav: React.FC<UserSideNavProps> = ({ selectedSection, setSelectedSection }) => {
  return (
    <nav className="hidden md:block w-64 bg-transparent p-4">
      <ul className="space-y-4">
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('cart')}
            className={selectedSection === 'cart' ? 'text-fd-pink-dark' : ''}
          >
            Cart
          </CustomLink>
          </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('profile')}
            className={selectedSection === 'profile' ? 'text-fd-pink-dark' : ''}
          >
            User Profile
          </CustomLink>
        </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('address-book')}
            className={selectedSection === 'address-book' ? 'text-fd-pink-dark' : ''}
          >
            Address Book
          </CustomLink>
        </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('payment-methods')}
            className={selectedSection === 'payment-methods' ? 'text-fd-pink-dark' : ''}
          >
            Payment Methods
          </CustomLink>
        </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('orders')}
            className={selectedSection === 'orders' ? 'text-fd-pink-dark' : ''}
          >
            Order History
          </CustomLink>
        </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('wishlist')}
            className={selectedSection === 'wishlist' ? 'text-fd-pink-dark' : ''}
          >
            Wishlist
          </CustomLink>
        </li>
        <li>
          <CustomLink 
            href="#"
            variant="text"
            onClick={() => setSelectedSection('logout')}
            className={selectedSection === 'logout' ? 'text-fd-pink-dark' : ''}
          >
            Logout
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserSideNav;