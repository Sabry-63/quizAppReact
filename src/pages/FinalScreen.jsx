import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleScoreChange, handleAmountChange } from "./../redux/action";

import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Finalscreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector((state) => state);

    const handleBackToSetting = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        navigate("/");
        return;
    };
    return (
        <Grid container>
            <Grid xs boxShadow={2} p={5} bgcolor="white">
                <Typography variant="h4" fontWeight="bold" mb={2}>
                    Final Score {score}
                </Typography>
                <Box>
                    <Button variant="outlined" onClick={handleBackToSetting}>
                        Back To Setting!
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Finalscreen;
