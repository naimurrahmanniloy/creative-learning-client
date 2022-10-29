import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CardDetails from "../components/CardDetails/CardDetails";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Header from "../components/Header/Header";
import TermsAndCondition from "../components/others/TermsAndCondition/TermsAndCondition";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Header></Header>,
            },
            {
                path: '/courses',
                loader: () => fetch(`https://creative-learning-server-naimurrahmanniloy.vercel.app`),
                element: <Courses></Courses>,
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://creative-learning-server-naimurrahmanniloy.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            }

        ]
    }
])