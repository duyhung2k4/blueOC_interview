import React from "react";

import { Routes, Route } from "react-router-dom";
import {
    PageNotFound,
} from "./lazy";
import AppshellLayout from "@/layouts/appShell";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AppshellLayout />}>
                {/* <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />
                <Route path={ROUTER.REGISTER.href} element={<PageRegsiter />} />
                <Route path={ROUTER.FACE_AUTH.href} element={<PageFaceAuth />} />
                <Route path={ROUTER.ACCEPT_CODE.href} element={<PageAcceptCode />} />
                <Route path={ROUTER.FACE_LOGIN.href} element={<PageFaceLogin />} />
                <Route path={ROUTER.SAVE_PROCESS.href} element={<PageSaveProcess />} />
                <Route path={ROUTER.HOME.href} element={<PageHome />} /> */}

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;