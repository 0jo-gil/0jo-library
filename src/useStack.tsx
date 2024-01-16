import {Stack, StackElementType} from "./Stack";
import {useEffect, useState} from "react";

interface IUseStack {
    elements: StackElementType[];
    options?: {
        initialRouteName?: string;
        duration?: number;
    }
}

export const useStack = ({elements, options}: IUseStack): {
    StackComponent: () => JSX.Element;
    onPush: (element: StackElementType) => void;
    onPop: () => void;
    onReplace: (element: StackElementType) => void;
} => {
    const [stackArray, setStackArray] = useState<StackElementType[]>([]);

    useEffect(() => {
        const initialStack = elements.filter((element) =>
            element.name === options?.initialRouteName)?.[0] || elements[0];

        onPush(initialStack);
    }, []);

    const onPush = (element: StackElementType) => {
        setStackArray((prev: StackElementType[]) => {
            const temp = prev;
            temp.push(element);

            return temp;
        })
    }

    const onPop = () => {
        setStackArray((prev: StackElementType[]) => {
            const temp = prev;
            temp.pop();

            return temp;
        })
    }

    const onReplace = (element: StackElementType) => {
        setStackArray((prev: StackElementType[]) => {
            const filterd = prev.filter((prevElement) => prevElement.name !== element.name);
            return filterd
        })

    }

    const StackComponent = () => {
        return(
            <Stack elements={elements} currentElement={stackArray[0]}/>
        )
    }

    return {
        StackComponent,
        onPush,
        onPop,
        onReplace
    }
}
