import { useStack } from "./useStack";
import * as ReactDOM from 'react-dom';
import React from "react";
import { Stack } from "./Stack";
import { render } from "@testing-library/react";

const STACK_LIST = [
    {
        name: 'Stack1',
        component: <p>Stack1</p>
    },
    {
        name: 'Stack2',
        component: <p>Stack2</p>
    },
    {
        name: 'Stack3',
        component: <p>Stack3</p>
    }
];

describe('useStack', () => {

    it('Stack 컴포넌트 렌더링', async () => {
        const TestComponent = () => {

            const { StackComponent } = useStack({
                elements: STACK_LIST,
                options: {
                    initialRouteName: 'Stack1'
                }
            });

            return <StackComponent />
        }


        render(<TestComponent />).getByText('Stack1');
    })

    it('useStack onPush', async() => {
        const TestComponent = () => {

            const { StackComponent, onPush } = useStack({
                elements: STACK_LIST,
                options: {
                    initialRouteName: 'Stack1'
                }
            });

            return (
                <>
                    <StackComponent />
                    <button onClick={() => onPush(STACK_LIST[1])}>onPush</button>
                </>
            )
        }

        const { getByText } = render(<TestComponent />);

        getByText('Stack1');
        getByText('onPush').click();
        getByText('Stack2');
    })

    it('useStack onPop', async() => {

        const TestComponent = () => {

            const { StackComponent, onPush, onPop } = useStack({
                elements: STACK_LIST,
                options: {
                    initialRouteName: 'Stack1'
                }
            });

            return (
                <>
                    <StackComponent />
                    <button onClick={() => onPush(STACK_LIST[1])}>onPush</button>
                    <button onClick={() => onPop()}>onPop</button>
                </>
            )
        }

        const { getByText } = render(<TestComponent />);

        getByText('Stack1');
        getByText('onPush').click();
        getByText('Stack2');
        getByText('onPop').click();
        getByText('Stack1');
    })
})

