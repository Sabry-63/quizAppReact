import Useaxios from "./../hooks/useAxios";
import {
    Box,
    FormControl,
    Typography,
    Radio,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    CircularProgress,
    Button,
    Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "./../redux/action";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Questions = () => {
    const { qu_category, qu_diffic, qu_type, qu_amount, score } = useSelector(
        (state) => state
    );

    // Create Random Num
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    // Use Dispatch & React Rourter Dom
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ref = useRef(null);

    // Use State
    const [questionIndex, setQuestionIndex] = useState(0);
    const [option, setOption] = useState([]);
    const [value, setValue] = useState("");
    const [checked, setchecked] = useState(true);
    const checkedOn = () => setchecked(false);
    const countRef = useRef(null);

    // Default Api
    let apiUrl = `/api.php?amount=${qu_amount}`;

    // GET Data Form Reducer
    const { respons, loading } = Useaxios({ url: apiUrl });

    // Get All Answers
    useEffect(() => {
        if (respons?.results.length) {
            const question = respons.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOption(answers);
        }
    }, [respons, questionIndex]);

    // Timer Dwon
    const seconds = 60;
    const [timeLeft, setTimeLeft] = useState(seconds);
    useEffect(() => {
        if (timeLeft <= 0) {
            countRef.current.click();
            setTimeLeft(seconds);
            return;
        }
        if (!loading) {
            const intervalId = setInterval(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [timeLeft, loading]);

    // Set Api Setiing
    if (qu_category) {
        apiUrl = apiUrl.concat(`&category=${qu_category}`);
    }
    if (qu_diffic) {
        apiUrl = apiUrl.concat(`&difficulty=${qu_diffic}`);
    }
    if (qu_type) {
        apiUrl = apiUrl.concat(`&type=${qu_type}`);
    }

    // If Data Is Load
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    }

    // Select Input
    const handleRadioChange = (e) => {
        setValue(e.target.value);
        checkedOn();
    };

    // Form Actions
    const handleSubmit = (e) => {
        e.preventDefault();
        // Next Question
        if (questionIndex + 1 < respons.results.length) {
            setQuestionIndex(questionIndex + 1);
            setTimeLeft(seconds);
            setchecked(true);
        } else {
            navigate("/score");
        }
        // Correct Ansers
        if (value === respons.results[questionIndex].correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }
    };

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={6} md={8}>
                    <Item>
                        <Typography variant="h5">
                            Question {questionIndex + 1} /
                            {respons.results.length}
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>
                        <Typography
                            variant="h6"
                            color={timeLeft < 10 ? "red" : ""}
                        >
                            Timer : {timeLeft}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>

            <Grid mt={2} spacing={2} container>
                <Grid item xs={12}>
                    <Item>
                        <form onSubmit={handleSubmit} ref={ref}>
                            <FormControl
                                sx={{ m: 3 }}
                                component="fieldset"
                                variant="standard"
                            >
                                <FormLabel component="legend">
                                    {decode(
                                        respons.results[questionIndex].question
                                    )}
                                </FormLabel>
                                <RadioGroup
                                    aria-label="quiz"
                                    name="quiz"
                                    value={value}
                                    onChange={handleRadioChange}
                                >
                                    {option.map((data, id) => {
                                        return (
                                            <FormControlLabel
                                                value={data}
                                                control={<Radio />}
                                                label={decode(data)}
                                                key={id}
                                            />
                                        );
                                    })}
                                </RadioGroup>
                                <Button
                                    sx={{ mt: 1, mr: 1 }}
                                    type="submit"
                                    variant="contained"
                                    ref={countRef}
                                    className={
                                        checked === false ? "show" : "hidden"
                                    }
                                >
                                    Check Answer
                                </Button>
                            </FormControl>
                        </form>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant="h6">
                            Your Score {score} / {respons.results.length}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Questions;
