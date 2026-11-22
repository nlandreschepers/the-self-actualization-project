import {
    AGGREGATE_TEXT_LINE_TYPE_IMAGE,
    AGGREGATE_TEXT_LINE_TYPE_KATEX,
    AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT
} from "../../QUQTrainerEditor/QUQTrainerEditorItem/QUQTrainerEditorAggregateTextEditorBlock/QUQTrainerEditorAggregateTextEditorLine/constants";
import Latex from "react-latex";
import {BlockMath} from 'react-katex';

export const aggregateTextBlock = (lines) => {

    if (!!!lines) {
        return;
    }

    let blockElems = [];
    lines.forEach(line => {

        if (line === null) {
            return;
        }

        if (line.type === AGGREGATE_TEXT_LINE_TYPE_PLAIN_TEXT) {
            let paragraph = <p key={line.id} className="item-renderer-prompt">
                <Latex key={line.id}>{line.text}</Latex>
            </p>
            blockElems.push(paragraph);
        } else if (line.type === AGGREGATE_TEXT_LINE_TYPE_KATEX) {
            blockElems.push(<BlockMath key={line.id} math={line.text}/>);
        } else if (line.type === AGGREGATE_TEXT_LINE_TYPE_IMAGE) {
            blockElems.push(<div key={line.id}
                                 className="item-renderer-prompt-image"><img
                src={line.text} alt=""/></div>
            );
        }
    });
    return blockElems;
}