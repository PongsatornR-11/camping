import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-8 w-1/3 rounded-md mt-1" />
      <Skeleton className="h-10 w-full rounded-md mt-4" />
      <Skeleton className="h-280px md:h-[500px] w-full rounded-md mt-4" />
      <Skeleton className="h-10 w-full rounded-md mt-4" />
      <Skeleton className="h-10 w-3/4 rounded-md mt-4" />
      <Skeleton className="h-10 w-2/4 rounded-md mt-4" />
    </div>
  );
};

export default loading;
