import './style.scss'
import React, {useEffect, useState} from "react";
import QUQTrainerEditorItem from "./QUQTrainerEditorItem";
import QUQTrainerEditorJsonManualEditor
    from "./QUQTrainerEditorJsonManualEditor";
import {downloadJson, readFile} from "../../../../../util/FileUtils";
import {AiTwotoneFolderOpen} from "react-icons/ai";
import {b64EncodeUnicode} from "../../../../../util/Base64Util";
import {
    addItem,
    onManualEditingChange,
    processFileContents,
    resetJson,
    updateItem
} from "./functions";
import {QUQTrainerEditorBase64} from "./QUQTrainerEditorBase64";
import {QUQTrainerEditorTitle} from "./QUQTrainerEditorTitle";

const fileInputRef = React.createRef();

function QUQTrainerEditor() {

    const [title, setTitle] = useState("");
    const [items, setItems] = useState([]);

    const onStorageUpdate = (e) => {
        const {key} = e;
        if (key === "items") {
            setItems(JSON.parse(localStorage.getItem("items")) || []);
        } else if (key === "title") {
            setTitle(localStorage.getItem("title"));
        }
    };

    const updateItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };

    const updateTitle = (newTitle) => {
        setTitle(newTitle);
        localStorage.setItem("title", newTitle);
    }

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("items")) || []);
        setTitle(localStorage.getItem("title") || '');
        window.addEventListener("storage", onStorageUpdate);
        return () => {
            window.removeEventListener("storage", onStorageUpdate);
        };
    }, []);


    function getQuestionnaireAsJsObject() {
        return {
            title: title,
            items: items
        };
    }

    function calculateJsonAsPrettyString() {
        let json = getQuestionnaireAsJsObject();
        return JSON.stringify(json, null, 2);
    }

    let editorItems = items.map((item) => <QUQTrainerEditorItem item={item}
                                                                key={item.id}
                                                                updateItem={(item) => updateItem(items, item, updateItems)}/>);

    return (
        <div className={"container qu-trainer-editor"}>

            <h1>Questionnaire Trainer Editor</h1>

            <p>Here you can create a new questionnaire.</p>

            <p className="tip-text">
                Tip: You can open the editor in multiple tabs and edit the same
                questionnaire.
            </p>

            <button
                onClick={() => downloadJson(title, {
                    title: title,
                    items: items
                })}
                type="button"
                className="btn btn-info">
                <i className="fa-solid fa-download"></i>
            </button>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={() => fileInputRef.current.click()}
                    type="button"
                    className="btn btn-primary">
                <AiTwotoneFolderOpen
                    className="dialogue-controls-load-button"/>
            </button>

            <input type='file' ref={fileInputRef} className="file-input"
                   onChange={() => readFile(fileInputRef, (result) => processFileContents(result, updateTitle, updateItems))}
                   readOnly={true}/>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <button
                onClick={() => resetJson(setTitle, setItems)}
                type="button"
                className="btn btn-danger">
                <i className="fa-solid fa-rotate"></i>
            </button>

            <br/><br/>

            <QUQTrainerEditorBase64
                base64Code={b64EncodeUnicode(getQuestionnaireAsJsObject())}/>

            <QUQTrainerEditorTitle updateTitle={updateTitle} title={title}/>

            {editorItems}

            <br/>

            <button onClick={() => addItem(items, updateItems)} type="button" className="btn btn-info">Add
                item
            </button>

            <br/><br/>

            <QUQTrainerEditorJsonManualEditor
                json={calculateJsonAsPrettyString()}
                onManualEditingChange={(json) => onManualEditingChange(json, updateTitle, updateItems)}/>

            <br/><br/>

        </div>
    )
}

export default QUQTrainerEditor;