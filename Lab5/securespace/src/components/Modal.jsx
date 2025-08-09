import React, { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true 
}) => {
  // Handle escape key press
  useEffect(() => {
    if (!closeOnEscape) return;
    
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  // Define size classes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };

  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleOverlayClick}
      />
      
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative w-full ${sizeClasses[size]} transform rounded-lg bg-gray-800 shadow-xl transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              {title && (
                <h3 className="text-xl font-semibold text-white">
                  {title}
                </h3>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Confirmation Modal Component
export const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "default" // default, danger, warning
}) => {
  const typeStyles = {
    default: "bg-blue-600 hover:bg-blue-700",
    danger: "bg-red-600 hover:bg-red-700",
    warning: "bg-yellow-600 hover:bg-yellow-700"
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={title}
      size="sm"
    >
      <div className="text-center">
        <div className="mb-4">
          {type === 'danger' && (
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          )}
          <p className="text-gray-300 text-sm">
            {message}
          </p>
        </div>
        <div className="flex space-x-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-white rounded-md transition duration-200 ${typeStyles[type]}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Info Modal Component
export const InfoModal = ({ 
  isOpen, 
  onClose, 
  title,
  content,
  buttonText = "Close"
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={title}
      size="md"
    >
      <div>
        <div className="mb-6 text-gray-300">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Bug Bounty Details Modal
export const BountyDetailsModal = ({ 
  isOpen, 
  onClose, 
  bounty 
}) => {
  if (!bounty) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={bounty.title}
      size="lg"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Reward Range</h4>
            <p className="text-white font-semibold text-lg">{bounty.reward}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-1">Difficulty</h4>
            <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${
              bounty.difficulty === 'High' ? 'bg-red-900 text-red-300' :
              bounty.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
              'bg-green-900 text-green-300'
            }`}>
              {bounty.difficulty}
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Description</h4>
          <p className="text-gray-300">{bounty.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Scope</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {bounty.scope?.map((item, index) => (
              <li key={index}>{item}</li>
            )) || ['Scope details not available']}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Out of Scope</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {bounty.outOfScope?.map((item, index) => (
              <li key={index}>{item}</li>
            )) || ['Out of scope details not available']}
          </ul>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Close
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200">
            Apply for Bounty
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Modal;
