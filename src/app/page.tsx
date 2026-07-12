'use server'
import Header from "../components/layout/header";
import PostMiddle from "@/components/ui/postMiddle";
import Footer from "@/components/layout/footer";
import {Suspense} from "react";
import LoadingAnimation from "@/components/ui/loadingAnimation";


export default async function Feed() {
  return (
      <>
        <Suspense fallback={<LoadingAnimation/>}>
            <Header />
            <PostMiddle/>
            <Footer/>
        </Suspense>
      </>
  );
}