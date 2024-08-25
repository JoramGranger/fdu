'use client'
import { useState } from 'react';
import UserDashboard from "../ui/sections/userDashboard/page";
import UserSideNav from "../ui/composites/menu/userSideNav";
import Profile from "./profile/page";
import Order from "./orders/page";
import Address from "./address-book/page";
import Wishlist from "./wishlist/page";

export default function My() {
  const [selectedSection, setSelectedSection] = useState('profile');

  const renderContent = () => {
    switch (selectedSection) {
      case 'profile':
        return <Profile />;
      case 'orders':
        return <Order />;
      case 'address-book':
        return <Address />;
      case 'wishlist':
        return <Wishlist />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <UserSideNav selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <UserDashboard>
        {renderContent()}
      </UserDashboard>
    </div>
  );
}
