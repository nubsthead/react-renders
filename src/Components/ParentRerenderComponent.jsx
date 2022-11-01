import {useState} from "react";
import {colors} from "../utils/colors";
import {useRenderCounter} from "../hooks/useRenderCounter";

const ChildrenRenderComponent = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>Different story if we type inside the children. This will not affect its parent rendering and will re-render only itself.</p>
            <p>Children component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Children render count: {renderCounter}</p>
        </div>
    );
}

const ParentComponent = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.second,
            padding: '20px'
        }}>
            <p>In this case we can see how the children component is affected by its parent. Every time we causes a render of the parent, also the children will be re-rendered. Try to type inside the parent input to see the render counter increase also for the children.</p>
            <p>Parent component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Parent render count: {renderCounter}</p>
            <ChildrenRenderComponent />
        </div>
    )
}
export const ParentRerenderComponent = () => {

    return (
        <div style={{
            padding: '20px',
            margin: '4px'
        }}>
            <h2>Re-renders on parent changes.</h2>
            <ParentComponent />
        </div>
    );
}