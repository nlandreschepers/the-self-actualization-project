import {State} from "../../state-machine";
import {aggregateTextBlock} from "../../functions";

function ItemEntry(props) {

    let checked = props.selectedOptions.includes(props.optionData.id);

    let classNames = "qu-renderer-option list-group-item" + ([State.INITIAL_STATE, State.ANSWER_CHOSEN].includes(props.state) ? '' : ' no-pointer-events');
    if ([State.SUBMITTED, State.CONTINUED].includes(props.state)) {
        let correctOptionChosen = props.optionData.isCorrectOption;
        if (checked && correctOptionChosen) {
            classNames += " list-group-item-success";
        } else if (checked && !correctOptionChosen) {
            classNames += " list-group-item-danger";
        } else if (!checked && correctOptionChosen) {
            classNames += " list-group-item-warning";
        }
    }

    return (
        <li className={classNames}>
            <input id={props.optionData.id} className="form-check-input me-1"
                   type={props.cardinality === 'SINGLE' ? 'radio' : 'checkbox'}
                   value={props.optionData.id} aria-label="..."
                   name={props.id}
                   onChange={props.handleChange}
                   checked={checked}
            />
            <label className="form-check-label"
                htmlFor={props.optionData.id}>{aggregateTextBlock(props.optionData.optionItemLines)}</label>
        </li>
    )
}

export default ItemEntry;