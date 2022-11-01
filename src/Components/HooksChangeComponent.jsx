import {useBoolean} from "../hooks/useBoolean";
import {useRenderCounter} from "../hooks/useRenderCounter";
import {colors} from "../utils/colors";

const ChildrenComponent = ({ inputValue, setInputValue }) => {
    const renderCounter = useRenderCounter();

    return (
        <div style={{
            padding: '20px',
            margin: '4px',
            backgroundColor: colors.third
        }}>
            <p>Children component</p>
            <input type="button" value={inputValue} onClick={setInputValue} />
            <p>Render count: {renderCounter}</p>
        </div>
    )
}
export const HooksChangeComponent = () => {
    const [inputValue, setInputValue] = useBoolean();
    const renderCounter = useRenderCounter();

    return (
        <div style={{
            padding: '20px',
            margin: '4px'
        }}>
            <h2>Re-render on hooks change</h2>
            <div style={{
                    padding: '20px',
                    margin: '4px',
                    backgroundColor: colors.second
                }}>
                <p>Hook value is modified inside the children component and this will trigger a re-render of the parent component which is providing the hook.</p>
                <p>Parent component</p>
                <p>Render count: {renderCounter}</p>
                <ChildrenComponent setInputValue={setInputValue} inputValue={inputValue} />
            </div>
        </div>
    )
}