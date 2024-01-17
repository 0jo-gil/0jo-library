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

    useEffect(() => {
        if(!options?.initialRouteName) {
            onPush(elements[0])
            return;
        }

        const initialStack = elements.findIndex((element) => {
            return element.name === options?.initialRouteName;
        })

        if(initialStack === -1) {
            onPush(elements[0]);
        } else {
            for(let i = 0; i < initialStack; i++) {
                onPush(elements[i]);
            }
        }

    }, []);

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
            setStackArray((prev: StackElementType[]) => {
                return prev.slice(0, -1);
            });
        }, options?.duration ?? 500);
    }

    const onPop = () => {
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
            <Stack elements={stackArray} currentIndex={stackArray.length - 1} isEnter={isEnter} isOut={isOut} />
        )
    }

    return {
        StackComponent,
        onPush,
        onPop,
        onReplace,
       
    }
}
