import { PropsWithChildren } from "react";
import styled, { css, keyframes } from 'styled-components';

export type StackElementType = {
    name: string;
    component: JSX.Element;
}

interface IStack {
    elements: StackElementType[];
    currentIndex: number;
    isEnter?: boolean;
    isOut?: boolean;
}

//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8
//https://blog.itcode.dev/projects/2022/06/10/react-components-library-starter
//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8

export const Stack = ({ elements, currentIndex, isEnter, isOut }: IStack) => {

    return (
        <StackContainer>
            {elements.map((element, index) => (
                <StStack 
                    key={index} 
                    className={
                        isEnter && index === currentIndex ? 'enter' :
                        isOut && index === currentIndex ? 'out' : ''
                    }
                    isEnter={isEnter && index === currentIndex} 
                    isOut={isOut && index === currentIndex}
                >
                    {element.component}
                </StStack>
            ))}
        </StackContainer>
    )
}

export const StackContainer = ({children}: PropsWithChildren) => {
    return (
        <StStackContianer>
            {children}
        </StStackContianer>
    )
}

const StStackContianer = styled.div`
    width: 100%;
    height: 100%;
`;


const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StStack = styled.div<Pick<IStack, 'isEnter' | 'isOut'>>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #242424;
  

    &.enter {
        animation: ${slideIn} 0.5s ease-in-out;
    }

    &.out {
        animation: ${slideOut} 0.5s ease-in-out;
    }
`;


