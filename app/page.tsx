import LoadingLocationCard from "@/components/card/LoadingLocationCard";
import LocationContainer from "@/components/home/LocationContainer";
import { Suspense } from "react";
const page = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  const { search, category } = await searchParams;
  return (
    <section>
      <Suspense fallback={<LoadingLocationCard />}>
        <LocationContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default page;
