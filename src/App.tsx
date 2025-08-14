import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routePath";

function App() {
    return (
        <div id="wrap" className="w-[393px] h-[calc(100vh-24px)] rounded-[5px] border border-solid">
            <Routes>
                {routes.map((r) => (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={<r.component />}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default App;
