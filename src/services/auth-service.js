import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post("http://localhost:8000/api/auth/login", {
      number: number,
      password: password,
    });
    console.log("Logged IN");
    // console.log({ accessToken, username });
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);

    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
    return { error: "Login failed. Please try again." };
  }
};

// import axios from "axios";

// export const loginHandler = async (username, password) => {
//   try {
//     const response = await axios.post("https://quiz-fawn-seven.vercel.app/api/v1/users/login", {
//       username: username,
//       password: password,
//     });

//     const { data: { token }, status } = response;

//     if (status === 200) {
//       localStorage.setItem("token", token);
//       return token;
//     } else {
//       console.log("You don't have a token");
//       localStorage.setItem("token", "");
//       return null;
//     }
//   } catch (err) {
//     console.error("Login failed:", err);
//     return null;
//   }
// };
