import LoadingLocationCard from "@/components/card/LoadingLocationCard";
import LocationContainer from "@/components/home/LocationContainer";
import { Suspense } from "react";
const page = async ({searchParams,}: {searchParams: { search?: string };
}) => {
  const {search} = await searchParams;
  return (
    <section>
      <Suspense fallback={<LoadingLocationCard />}>
        <LocationContainer search={search}/>
      </Suspense>
    </section>
  );
};

export default page;
