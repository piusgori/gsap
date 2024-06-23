import { useRoutes } from "react-router-dom"
import GsapTo from "../pages/gsap-to";
import GsapFrom from "../pages/gsap-from";
import GsapFromTo from "../pages/gsap-from-to";
import GsapTimeline from "../pages/gsap-timeline";
import Home from "../pages/home";
import GsapStagger from "../pages/gsap-stagger";
import GsapScrollTrigger from "../pages/gsap-scroll-trigger";
import GsapText from "../pages/gsap-text";

const Routes = () => {
    const router = useRoutes([
        { element: <Home />, index: true },
        { path: 'gsap-to', element: <GsapTo /> },
        { path: 'gsap-from', element: <GsapFrom /> },
        { path: 'gsap-from-to', element: <GsapFromTo /> },
        { path: 'gsap-timeline', element: <GsapTimeline /> },
        { path: 'gsap-stagger', element: <GsapStagger /> },
        { path: 'gsap-scroll-trigger', element: <GsapScrollTrigger /> },
        { path: 'gsap-text', element: <GsapText /> },
    ]);

    return router;
}

export default Routes