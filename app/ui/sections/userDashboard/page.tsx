const UserDashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex-1 p-6">
        {children}
      </div>
    );
  };
  
  export default UserDashboard;
  