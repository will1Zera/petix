import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";

export function Router(){
    return(
        // Define as rotas e seus respectivos elementos, para cada página/rota
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
            </Route>
        </Routes>
    )
}