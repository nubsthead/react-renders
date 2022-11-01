import {useCallback, useState} from "react";

export const useBoolean = () => {
    const [boolean, setBoolean] = useState(true);
    const toggleBoolean = useCallback(() => {
        setBoolean((bool) => !bool)
    }, [setBoolean])
    return [boolean, toggleBoolean]
}