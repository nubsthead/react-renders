import {createContext, useContext, useState, memo} from "react";
import {colors} from "../utils/colors";
import {useRenderCounter} from "../hooks/useRenderCounter";
import {useBoolean} from "../hooks/useBoolean";

const ExampleContext = createContext(undefined);

const ContextBoolConsumer = () => {
    const { bool } = useContext(ExampleContext);
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This children consume only the boolean value of the context. It will be affected also by the input.</p>
            <p>Boolean value: {bool?.toString()}</p>
            <p>Render count: {renderCounter}</p>
        </div>
    )
}

const ContextInputConsumer = () => {
    const { inputValue } = useContext(ExampleContext);
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This children consume only the input value of the context. It will be affected also by the boolean.</p>
            <p>Input value: {inputValue}</p>
            <p>Render count: {renderCounter}</p>
        </div>
    )
}

const FullContextConsumer = () => {
    const { inputValue, bool } = useContext(ExampleContext);
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>This children consume both input and boolean.</p>
            <p>Context values: {bool?.toString()} {inputValue}</p>
            <p>Render count: {renderCounter}</p>
        </div>
    )
}
const NoContextConsumer = () => {
    const renderCounter  = useRenderCounter();

    return (
        <div style={{
            backgroundColor: colors.third
        }}>
            <p>Does not consume any context</p>
            <p>Render count: {renderCounter}</p>
        </div>
    )
}

const MemoizedBoolConsumer = memo(ContextBoolConsumer);
const MemoizedInputConsumer = memo(ContextInputConsumer);
const MemoizedFullContextConsumer = memo(FullContextConsumer);
const MemoizedNoContextConsumer = memo(NoContextConsumer);

export const ContextChangeComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [bool, setBool] = useBoolean();
    return (
        <div style={{
            padding: '20px',
            margin: '4px'
        }}>
            <h2>Re-render on Context change</h2>
            <div style={{
                backgroundColor: colors.second,
                padding: '20px'
            }}>
                <p>In this example we have two different values, a string and a boolean, provided to the children using a context provider. There are multiple children different by each other to show all the possible outcome.</p>
                <input type="text" value={inputValue} onChange={(ev) => setInputValue(ev.target.value)} />
                <input type="button" value={bool} onClick={setBool} />
                <ExampleContext.Provider value={{ bool, inputValue }}>

                    <h3>Memoized children</h3>
                    <p>Even if all the components are memoized, a change to the context will cause a re-render to all those components that use it, even partially</p>
                    <MemoizedBoolConsumer />
                    <MemoizedInputConsumer />
                    <MemoizedFullContextConsumer />
                    <MemoizedNoContextConsumer />
                </ExampleContext.Provider>
            </div>
        </div>
    )
}