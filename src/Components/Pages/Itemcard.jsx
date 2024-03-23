import React from "react";
import { useParams } from "react-router-dom";

const Itemcard = () => {
  let { id } = useParams();

  return (
    <div>
      <div className="w-full bg-black text-gray-200 p-4 text-2xl font-semibold">
        Phase - {id}
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Phase - {id}</h1>
        <p className="mb-2">
          <span className="font-bold">Description:</span> Gathering information
          about consumer needs and preferences.
        </p>
        <p className="mb-2">
          <span className="font-bold">Duration:</span>{" "}
          {Math.floor(Math.random() * 30)} days
        </p>
        <p className="mb-2">
          <span className="font-bold">Cost:</span> $
          {Math.floor(Math.random() * 50000)}
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Itemcard;
