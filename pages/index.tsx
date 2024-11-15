import Banner from "@/components/banner";
import Counseling from "@/components/counseling";
import Partners from "@/components/partners";
import Products from "@/components/products";
import Solution from "@/components/solution";

export default function Home() {
  return (
    <>
      <Banner></Banner>

      <Products></Products>

      <Solution></Solution>

      <Partners></Partners>

      <Counseling></Counseling>
    </>
  );
}
