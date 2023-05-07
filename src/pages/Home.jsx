import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const {username} = useContext(AppContext);

  if (username.length === 0 || username === undefined) {
    return <h1>Welcom Home😁😋</h1>;
  } else {
    return (
      <div>
        <h1>Welcom Home, {username}😁😋</h1>
      </div>
    );
  }
};
