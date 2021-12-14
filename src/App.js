import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import Finalscreen from "./pages/FinalScreen";

import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./app.css";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Container maxWidth="sm">
                <Box textAlign="center" mt={5}>
                    <Routes>
                        <Route path="/" exact element={<Settings />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="/score" element={<Finalscreen />} />
                    </Routes>
                </Box>
            </Container>
        </Router>
    );
};

export default App;
