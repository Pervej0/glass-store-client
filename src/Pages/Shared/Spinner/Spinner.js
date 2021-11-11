import React from "react";

const Spinner = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </section>
  );
};

export default Spinner;