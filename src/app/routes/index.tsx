import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom"
import { Error404 } from "../error404"
import { Dashboard, Login } from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<Error404/>} />
            </Switch>
        </BrowserRouter>
    )
}