import {memo, useState} from "react";
import {colors} from "../utils/colors";
import {useRenderCounter} from "../hooks/useRenderCounter";

const ChildrenRenderComponent = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This component is memoized and its renders won't be affected by the parent.</p>
            <p>Children component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Children render count: {renderCounter}</p>
        </div>
    );
}

const ChildrenRenderComponentMemo = memo(ChildrenRenderComponent);

const ParentComponent = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.second,
            padding: '20px'
        }}>
            <p>Parent component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Parent render count: {renderCounter}</p>
            <ChildrenRenderComponentMemo />
        </div>
    )
}

const ParentComponentWithChildren = ({ children }) => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.second,
            padding: '20px'
        }}>
            <p>Parent component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Parent render count: {renderCounter}</p>
            { children }
        </div>
    )
};

const ParentComponentWithProps = ({ firstComp, secondComp }) => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.second,
            padding: '20px'
        }}>
            <p>Parent component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Parent render count: {renderCounter}</p>
            {firstComp}
            {secondComp}
        </div>
    )
}
const ChildrenComponentWithChildrenProp = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This component is not memoized. It is passed down using the children prop so it won't be affected by parent re-renders.</p>
            <img src="/ChildrenAsProp.png"  alt="children-as-prop"/>
            <p>The parent will be like this: </p>
            <img src="/Parent.png"  alt="parent"/>
            <p>Children component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Children render count: {renderCounter}</p>
        </div>
    );
}
const ChildrenComponentAsProp = () => {
    const [value, setValue] = useState('');
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This component is not memoized. It is passed down as parent prop so it won't be affected by parent re-renders.</p>
            <p>Children component.</p>
            <input type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value)
            }} />
            <p>Children render count: {renderCounter}</p>
        </div>
    );
}

const ComponentsAsProps = () => {
    return (
        <>
            <ParentComponentWithProps firstComp={<ChildrenComponentAsProp />} secondComp={<ChildrenComponentAsProp />} />
            <img src="/childrenProp.png"  alt="children prop" width="90%"/>
            <p>Which is </p>
            <img src="/impl.png"  alt="parent code"/>
        </>)
}

export const ParentRerenderMemo = () => {

    return (
        <div style={{
            padding: '20px',
            margin: '4px'
        }}>
            <h2>Memoization</h2>
            <ParentComponent />
            <h2>Children as props</h2>
            <ParentComponentWithChildren>
                <ChildrenComponentWithChildrenProp />
            </ParentComponentWithChildren>
            <h2>Components as props</h2>
            <ComponentsAsProps />
        </div>
    );
}