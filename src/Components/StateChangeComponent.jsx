import {useState} from "react";
import {useRenderCounter} from "../hooks/useRenderCounter";
import {colors} from "../utils/colors";

const StateChildrenComp = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();
    return (
        <div style={{
            backgroundColor: colors.second,
            padding: '20px'
        }}>
            <p>This component is a basic example which shows re-renders at every state changes. Every time you type inside the input, the component will re-render to update the state.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Render count: {renderCounter}</p>
        </div>
    )
}
export const StateChangeComponent = () => {
    return (
        <div style={{
            padding: '20px',
            margin: '4px'
        }}>
            <h2>Re-renders on state changes.</h2>
            <StateChildrenComp />
        </div>
    );
}