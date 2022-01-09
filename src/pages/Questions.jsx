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
    // Set Radio Value
    const [value, setValue] = useState("");
    // Set Checked
    const [checked, setchecked] = useState(true);
    const checkedOn = () => setchecked(false);
    // Ref To Count
    const countRef = useRef(null);

    // Default Api
    let apiUrl = `/api.php?amount=${qu_amount}`;

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

    // If Data Is Load
    if (loading) {
        return (
            <Box>
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
            setValue("");
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
            <Grid container spacing={2} boxShadow={3} bgcolor="white">
                <Grid xs={12} md={8}>
                    <Typography
                        variant="h5"
                        p={2}
                        mr={2}
                        backgroundColor="primary.main"
                        color="white"
                    >
                        Question {questionIndex + 1} /{respons.results.length}
                    </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography
                        p={2}
                        variant="h6"
                        color={timeLeft < 10 ? "red" : "primary.main"}
                    >
                        Timer : {timeLeft}
                    </Typography>
                </Grid>
            </Grid>

            <Grid mt={2} spacing={2} container boxShadow={3} bgcolor="white">
                <Grid xs={12} p={2}>
                    <form onSubmit={handleSubmit} ref={ref}>
                        <FormControl
                            sx={{ m: 3 }}
                            component="fieldset"
                            variant="standard"
                        >
                            <Box borderBottom={1} pb={2} mb={2}>
                                <FormLabel component="legend">
                                    {decode(
                                        respons.results[questionIndex].question
                                    )}
                                </FormLabel>
                            </Box>
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
                </Grid>
                <Grid
                    xs={12}
                    borderTop={1}
                    borderColor="primary.main"
                    backgroundColor="primary.main"
                    color="white"
                    p={2}
                >
                    <Typography variant="h6">
                        Your Score {score} / {respons.results.length}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Questions;
