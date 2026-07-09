'use server'
import Header from "../components/layout/header";
import Posts from "@/components/ui/posts";
import Footer from "@/components/layout/footer";


export default async function Feed() {

  return (
      <>
        <Header />
        <Posts/>
        <Footer/>
      </>
  );
}