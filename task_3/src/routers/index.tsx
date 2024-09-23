import React from "react";

import { Routes, Route } from "react-router-dom";
import {
    PageNotFound,
    PagePosts,
} from "./lazy";
import AppshellLayout from "@/layouts/appShell";
import { ROUTER } from "@/constants/router";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AppshellLayout />}>
                <Route path={"/"} element={<PagePosts />} />
                <Route path={ROUTER.POSTS.href} element={<PagePosts />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;