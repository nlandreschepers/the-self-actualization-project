import QuestionnaireTrainer from "../QuestionnaireTrainer";
import {JSON} from './test-questionnaire'

function QUQTrainerDemoContainer() {

    return (
        <div>
            <QuestionnaireTrainer title={JSON.title} items={JSON.items}/>
        </div>
    )
}

export default QUQTrainerDemoContainer;