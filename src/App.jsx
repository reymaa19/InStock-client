import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>default</>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
