import React from "react";

export const DeleteModal = ({ onClose, deleteRecipe }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 min-h-screen min-w-screen flex justify-center bg-black/90 items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-96 flex flex-col items-center justify-center py-2.5 rounded-md"
      >
        <h1 className="font-semibold text-center text-red-600">
          Are you sure you want to Delete it.
        </h1>
        <div className="flex py-3 items-center gap-7">
          <button
            onClick={deleteRecipe}
            className="shadow shadow-gray-400 px-2 py-0.5 rounded cursor-pointer"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="shadow shadow-gray-400 px-2 py-0.5 rounded cursor-pointer"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};
