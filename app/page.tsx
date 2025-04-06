import LoadingLocationCard from "@/components/card/LoadingLocationCard";
import LocationContainer from "@/components/home/LocationContainer";
import { Suspense } from "react";
const page = () => {
  return (
    <section>
      <Suspense fallback={<LoadingLocationCard/>}>
        <LocationContainer />
      </Suspense>
    </section>
  );
};

export default page;
