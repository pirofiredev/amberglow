'use server'
import Header from "../components/layout/header";
import FilterButton from "@/components/ui/filterButton";


export default async function Home() {
  return (
      <>
        <Header />
        <FilterButton />
      </>

  );
}