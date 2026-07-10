'use server'
import Header from "../components/layout/header";
import Posts from "@/components/ui/posts";
import Footer from "@/components/layout/footer";
import LoadingAnimation from "@/components/ui/loadingAnimation"
import {Suspense} from "react";


export default async function Feed() {
  return (
      <>
        <Header />
          <Suspense fallback={<LoadingAnimation/>}>
              <Posts/>
          </Suspense>
        <Footer/>
      </>
  );
}