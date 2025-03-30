"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const page = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Home Page</h1>
      



      <div className="flex flex-col border p-4 w-64 mx-auto justify-center items-center">
        <h2 className="text-center p-1 text-xl">Counter</h2>
        <div>
          <Button variant="secondary" onClick={handleClick}>
            Click me
          </Button>
        </div>
        <p className="m-2 p-2 text-center">{count > 0 ? `You clicked ${count} times` : "Click the button"}</p>
        <div>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
