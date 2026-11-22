import {useState} from "react";
import {State} from "./state-machine";
import ItemOptionsBlock from "./ItemOptionsBlock";
import ItemSubmitButton from "./ItemSubmitButton";
import ItemContinueButton from "./ItemContinueButton";
import ItemFeedbackSection from "./ItemFeedbackSection";
import {aggregateTextBlock} from "./functions";


function ItemRenderer(props) {

    const [stateMachineState, setStateMachineState] = useState(State.INITIAL_STATE);
    const [chosenOptions, setChosenOptions] = useState([]);

    const handleSubmit = () => {
        setStateMachineState(State.SUBMITTED);
    }

    const handleContinue = () => {
        setStateMachineState(State.CONTINUED);
        props.continueCallback(chosenOptions);
    }

    const optionsChangeCallback = (newOptions) => {
        if (newOptions.length < 1) {
            setStateMachineState(State.INITIAL_STATE)
        } else if (stateMachineState === State.INITIAL_STATE) {
            setStateMachineState(State.ANSWER_CHOSEN);
        }
        setChosenOptions(newOptions);
    }

    let promptElems = aggregateTextBlock(props.promptItemLines);

    return (
        <div key={props.id} className="item-renderer">
            <h3>{props.promptTitle}</h3>

            {promptElems}

            <br/>
            <ItemOptionsBlock
                state={stateMachineState}
                chosenOptions={chosenOptions}
                optionsChangeCallback={optionsChangeCallback} {...props}/>
            <br/>
            <ItemSubmitButton handleSubmit={handleSubmit}
                              state={stateMachineState}/>
            <br/>
            <ItemFeedbackSection state={stateMachineState}
                                 feedbackText={props.feedbackText}
                                 feedbackLines={props.feedbackLines}/>

            <br/>
            <ItemContinueButton state={stateMachineState}
                                handleContinue={handleContinue}/>
        </div>
    )
}

export default ItemRenderer;