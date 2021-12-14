import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleScoreChange, handleAmountChange } from "./../redux/action";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

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
            <Grid container>
                <Grid item xs mt={10}>
                    <Item>
                        <Typography variant="h3" fontWeight="bold" my={3}>
                            Final Score {score}
                        </Typography>
                        <Box p={5}>
                            <Button
                                variant="outlined"
                                onClick={handleBackToSetting}
                            >
                                Back To Setting!
                            </Button>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Finalscreen;
