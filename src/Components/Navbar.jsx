import React, { useState } from 'react';
import '../CSS/Navbar.css'
import Letter from './Letter';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const routes = [
    {
      path: '/about',
      id: 'about',
      label: 'About',
    },
    {
      path: '/my-skills',
      id: 'my-skills',
      label: 'My Skills',
    },
    {
      path: '/my-projects',
      id: 'my-projects',
      label: 'My Projects',
    },
    {
      path: '/articles',
      id: 'articles',
      label: 'Articles',
    },
    {
      path: '/reach-out',
      id: 'reach-out',
      label: 'Reach Out',
    },
  ];
  

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        className="absolute top-0 left-0 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 z-10"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop with blur animation */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 opacity-0 animate-backdrop-show transition-opacity duration-300"></div>

          {/* Modal Content with animation */}
          <div onClick={closeModal} className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="bg-black bg-opacity-10 text-black rounded-lg shadow-2xl w-[90vw] h-[90vh] p-6 transform transition-all duration-500 ease-in-out scale-90 opacity-0 animate-modal-show
"
            >
              <div className="flex justify-center items-center h-full">
                {routes.map((route) => {
                  return (
                    <div key={route.id} className='p-20'>
                      <Letter letter={route.label.charAt(0)} target={route.path}/>
                    </div>
                  )
                })}
              </div>
                <button
                  className="absolute top-0 right-0 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
                  onClick={closeModal}
                >
                  Close Modal
                </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
