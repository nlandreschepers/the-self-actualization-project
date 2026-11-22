import React, {useEffect, useState} from "react";
import {readFile} from "../../../../../util/FileUtils";
import {AiTwotoneFolderOpen} from "react-icons/ai";
import QuestionnaireTrainer from "../QuestionnaireTrainer";
import {
    b64EncodeUnicode,
    decodeBase64ToJson
} from "../../../../../util/Base64Util";
import {useLocation, useNavigate, useParams} from "react-router";

const fileInputRef = React.createRef();

function QUQTrainerContainer() {

    let [loadedFile, setLoadedFile] = useState(() => null)

    let params = useParams();

    useEffect(() => {
        onLoadParseGivenUrlExercise(params.base64JsonExercise, setLoadedFile);
    }, [params]);

    let navigate = useNavigate();
    let location = useLocation();

    return (
        <div className={"container"}>
            <h1>Questionnaire Trainer</h1>
            <br/><br/>
            <h3>Load a questionnaire trainer file to start training:&nbsp;
                <button onClick={() => fileInputRef.current.click()}
                        type="button"
                        className="btn btn-primary">
                    <AiTwotoneFolderOpen
                        className="dialogue-controls-load-button"/>
                </button>
            </h3>
            <input type='file' ref={fileInputRef} className="file-input"
                   onChange={() => readFile(fileInputRef, (result) => processFileContents(result, setLoadedFile, navigate, location))}/>
            {!!loadedFile &&
                <QuestionnaireTrainer title={loadedFile.title}
                                      items={loadedFile.items}/>
            }
        </div>
    )
}

function processFileContents(fileText, setLoadedFile, navigate, location) {
    try {
        let base64 = b64EncodeUnicode(JSON.parse(fileText));
        navigate(location.pathname + "/" + base64);
    } catch (e) {
        console.error(e);
    }
}

function onLoadParseGivenUrlExercise(base64, setLoadedFile) {
    let decodedBase64 = decodeBase64ToJson(base64);
    if (decodedBase64 === null) {
        return;
    }
    setLoadedFile(decodedBase64);
}

export default QUQTrainerContainer;