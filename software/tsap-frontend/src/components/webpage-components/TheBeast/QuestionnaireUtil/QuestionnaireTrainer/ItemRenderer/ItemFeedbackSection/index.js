import {State} from "../state-machine";
import {aggregateTextBlock} from "../functions";


function ItemFeedbackSection(props) {

    let render = [State.SUBMITTED, State.CONTINUED].includes(props.state);

    if (render) {
        return <div className={"item-renderer-feedback"}>
            {aggregateTextBlock(props.feedbackLines)}
        </div>;
    } else {
        return <></>
    }
}

export default ItemFeedbackSection;