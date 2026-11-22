import {useEffect, useState} from "react";
import {Link} from "react-router";
import {Validator} from '@cfworker/json-schema';
import {JSON_QUESTIONNAIRE_SCHEMA} from "./json-questionnaire-schema";

function validateJson(json) {
    try {
        JSON.parse(json);
    } catch (e) {
        return false;
    }
    const validator = new Validator(JSON_QUESTIONNAIRE_SCHEMA);
    return validator.validate(JSON.parse(json));
}

function QUQTrainerEditorJsonManualEditor({json, onManualEditingChange}) {

    const [buffer, setBuffer] = useState("");
    const [useBuffer, setUseBuffer] = useState(false);
    const [isJsonValid, setIsJsonValid] = useState(() => validateJson(json).valid);
    const [isJsonError, setIsJsonError] = useState(false);
    const [jsonValidationErrors, setJsonValidationErrors] = useState([])

    useEffect(() => {
        setIsJsonValid(validateJson(json).valid);
        setJsonValidationErrors(validateJson(json).errors);
    }, [json])

    function textAreaOnChange(event) {
        event.preventDefault();
        let json = event.target.value;
        try {
            JSON.parse(json);
            setIsJsonValid(validateJson(json).valid);
            setJsonValidationErrors(validateJson(json).errors);
            setUseBuffer(false);
            onManualEditingChange(json);
            setIsJsonError(false)
        } catch (e) {
            setUseBuffer(true);
            setBuffer(json);
            setIsJsonError(true);
        }
    }

    let usedJson = useBuffer ? buffer : json;
    let style = useBuffer ? "quqtrainereditor-manual-editor-txt-area-error" +
        " shadow" : "quqtrainereditor-manual-editor-txt-area shadow";

    var jsonValidationErrorsList = jsonValidationErrors.map(error =>
        <li key={crypto.randomUUID()}>{JSON.stringify(error)}</li>)

    return (
        <div
            className="quqtrainereditor-manual-editor shadow border border-info p-3 rounded-3">
            <h4>JSON:</h4>
            {isJsonError && <br/>
                && <span className={"error-message"}>Invalid JSON.</span>
            }
            {!isJsonValid && <br/>
                && <span className={"non-valid-message"}>Failed to validate JSON against&nbsp;
                    <Link
                        to={'https://www.the-self-actualization-project.com/schemas/json-questionnaire-schema.json'}
                        target={'_blank'}>
                    schema
                </Link>.
                <ol style={{overflow: "overlay"}}>
                    {jsonValidationErrorsList}
                </ol>
            </span>}

            <textarea className={style} value={usedJson}

                      onChange={textAreaOnChange}/>
        </div>
    )
}

export {QUQTrainerEditorJsonManualEditor as default};
