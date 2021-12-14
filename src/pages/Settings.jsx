import Selectfiled from "./../components/SelectFiled";
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import TextFiledCop from "./../components/TextFiledCop";
import Useaxios from "./../hooks/useAxios";
import { useNavigate } from "react-router-dom";
const Settings = () => {
    const { respons, error, loading } = Useaxios({ url: "/api_category.php" });
    const navigate = useNavigate();
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Some Went Wrong!
            </Typography>
        );
    }

    const optionsDifficulty = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const optionsType = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True / False" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions");
    };

    return (
        <div>
            <Typography variant="h2" fontWeight="bold">
                Quiz App
            </Typography>
            <form onSubmit={handleSubmit}>
                <Selectfiled
                    options={respons.trivia_categories}
                    label="Category"
                />
                <Selectfiled options={optionsDifficulty} label="Difficulty" />
                <Selectfiled options={optionsType} label="Type" />
                <TextFiledCop />
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get Start
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Settings;
