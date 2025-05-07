import React from "react";
import { Skeleton } from "../ui/skeleton";
import { FavoriteCardButton } from "../form/Buttons";

const LoadingLocationCard = () => {
  return (
    <div>
      <SkeletonSwiper />
      <SkeletonCategory />
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

const SkeletonSwiper = () => {
  return (
    <Skeleton className="h-[500px] w-full relative opacity-75">
      <Skeleton className="h-[120px] w-full absolute bottom-0" />
    </Skeleton>
  );
};

const SkeletonCategory = () => {
  return (
    <div className="flex items-center justify-center mt-4 gap-2">
        <Skeleton className="h-20 w-2/3 rounded-md" />
    </div>
  );
};

export default LoadingLocationCard;
