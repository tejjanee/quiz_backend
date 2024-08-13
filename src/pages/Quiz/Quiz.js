import { Fragment, useEffect } from "react";
import { Navbar ,Qna} from "../../component";

import axios from "axios";
import { useQuiz } from "../../context";
// import { Aaa } from "../../component/Qna/Aaa.JSX";

export const Quiz = () => {
  const { quizCategory, quiz, quizDispatch } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("https://quiz-fawn-seven.vercel.app/api/v1/quiz", {
          headers: { authorization: localStorage.getItem("token") },
        });
        const filteredData =
          data &&
          data.length > 0 &&
          data.filter(({ category }) => category === quizCategory);
        if (filteredData && filteredData.length > 0) {
          quizDispatch({
            type: "SET_QUIZ",
            payload: filteredData,
          });
          localStorage.setItem("quiz", JSON.stringify(filteredData));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Navbar route="quiz" />
      {quiz && quiz.length > 0 && <Qna quizData={quiz} />}
    </Fragment>
  );
};