import Header from "../components/bridge/headerBridge";
import PostBridge from "../components/bridge/postBridge";
import Footer from "../components/client/templates/layout/footerTemplate";
import { Suspense } from "react";
import LoadingAnimation from "../components/client/templates/layout/loadingAnimation";

export default function Feed() {
    return (
            <Suspense fallback={<LoadingAnimation />}>
                <Header />
                <PostBridge />
                <Footer />
            </Suspense>
    );
}