import { useDispatch } from "react-redux";
import HappyIncrementor from "./components/HappyIncrementor";
import SadIncrementor from "./components/SadIncrementor";
import HappyTracker from "./components/HappyTracker";
import SadTracker from "./components/SadTracker";
import { ClearButtonClicked } from "./actions";
import Button from "./components/Button";

function App() {
    const dispatch = useDispatch();

    const handleClearClick = () => {
        dispatch(ClearButtonClicked);
    };

    return (
        <div className="space-y-2 p-2">
            <HappyTracker happyCount={0} />
            <SadTracker sadCount={0} />
            <HappyIncrementor />
            <SadIncrementor />
            <Button onClick={handleClearClick}>Clear All</Button>
        </div>
    );
}

export default App;