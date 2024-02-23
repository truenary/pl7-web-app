    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    const Logout: React.FC = () => {
      const navigate = useNavigate();
      const [showConfirmation, setShowConfirmation] = useState(true);

      const handleLogout = () => {
      
        localStorage.removeItem('accessToken');

        navigate('/login');
      };

      return (
      <>
          {showConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white p-8 rounded-lg">
                <p>Are you sure you want to quit?</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
                    onClick={handleLogout}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                    onClick={() => setShowConfirmation(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

    export default Logout;
