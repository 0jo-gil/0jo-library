import { Stack, StackElementType } from "./Stack";
import { useEffect, useState, memo, useMemo } from "react";

interface IUseStack {
    elements: StackElementType[];
    options?: {
        initialRouteName?: string;
        duration?: number;
    }
}

export const useStack = ({ elements, options }: IUseStack): {
    StackComponent: () => JSX.Element | Element;
    onPush: (element: StackElementType) => void;
    onPop: () => void;
    onReplace: (element: StackElementType) => void;
} => {
    const [stackArray, setStackArray] = useState<StackElementType[]>([]);
    const [isEnter, setIsEnter] = useState<boolean>(false);
    const [isOut, setIsOut] = useState<boolean>(false);

    // useEffect(() => {
    //     const initialStack = elements.filter((element) =>
    //         element.name === options?.initialRouteName)?.[0] || elements[0];

    //     onPush(initialStack);
    // }, []);

    const onPush = (element: StackElementType) => {
        setStackArray((prev: StackElementType[]) => {
            return [...prev, element];
        });

        initIsEnter();
    }

    const initIsEnter = () => {
        setIsEnter(true);
        setTimeout(() => {
            setIsEnter(false);
        }, options?.duration ?? 500);
    }

    const initIsOut = () => {
        setIsOut(true);
        setTimeout(() => {
            setIsOut(false);
        }, options?.duration ?? 500);
    }

    const onPop = () => {
        setStackArray((prev: StackElementType[]) => {
            return prev.slice(0, -1);
        });

        initIsOut();
    }


    const onReplace = (element: StackElementType) => {
        setStackArray((prev: StackElementType[]) => {
            const filterd = prev.filter((prevElement) => prevElement.name !== element.name);
            return filterd
        })
    }

    const StackComponent = () => {
        return (
            <Stack elements={stackArray} currentElement={stackArray[0]} isEnter={isEnter} isOut={isOut} />
        )
    }

    return {
        StackComponent,
        onPush,
        onPop,
        onReplace,
       
    }
}
