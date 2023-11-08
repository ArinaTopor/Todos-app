import { useDispatch } from "react-redux";
import { resetToDefault } from "./resetAction";
const ResetApp = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(resetToDefault())}>RESET</button>;
  };

export default ResetApp;