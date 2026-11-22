import QUQTrainerEditorAggregateTextEditorLine
    from "./QUQTrainerEditorAggregateTextEditorLine";
import {addItemLine, deleteLine, moveLine, replaceItemInListById} from "./functions";
import {useEffect} from "react";

function QUQTrainerEditorAggregateTextEditorBlock(props) {

    useEffect(() => {
        if (!!!props.lines) {
            props.updateAggregateTextLines([]);
        }
    }, [props])

    let propsLines = !!props.lines ? props.lines : [];
    let lines = propsLines.filter(line => !!line).map((line, index) => {
        return <QUQTrainerEditorAggregateTextEditorLine
            lineData={line}
            key={line.id}
            updateLineDataCallBack={(newLineData) => replaceItemInListById(props.lines, newLineData, props.updateAggregateTextLines)}
            deleteLine={(lineId) => deleteLine(props.lines, lineId, props.updateAggregateTextLines)}
            moveLine={(lineId, direction) => moveLine(props.lines, lineId, direction, props.updateAggregateTextLines)}
            index={index}
            nrOfLineItems={props.lines.length}/>
    });

    return (
        <div>
            <div>
                <button type="button" className="btn btn-success"
                        onClick={() => addItemLine(props.lines, props.updateAggregateTextLines)}>
                    Add new line
                </button>
            </div>
            <br/>
            {lines}
        </div>
    );
}

export default QUQTrainerEditorAggregateTextEditorBlock;