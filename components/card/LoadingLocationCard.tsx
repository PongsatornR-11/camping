import React from "react";
import { Skeleton } from "../ui/skeleton";
import { FavoriteCardButton } from "../form/Buttons";

const LoadingLocationCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="relative p-2">
      <Skeleton className="h-[300px] rounded-md mb-2">
        <div className="absolute top-3 right-3">
          <FavoriteCardButton isFavorite={false} />
        </div>
      </Skeleton>
      <Skeleton className="h-4 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-1/2 rounded-md mb-2" />
      <Skeleton className="h-4 w-1/4 rounded-md " />
    </div>
  );
};

export default LoadingLocationCard;
