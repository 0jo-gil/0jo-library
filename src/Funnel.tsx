import React, { Children, isValidElement, ReactElement, ReactNode } from "react";

//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8
//https://blog.itcode.dev/projects/2022/06/10/react-components-library-starter

//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8
interface IFunnelProps<T extends string[]> {
    activities: T;
    currentActivity: T[number];
    children: Array<ReactElement<IActivityProps<T>>>
}

interface IActivityProps<T extends string[]> {
    name: T[number];
    children: ReactNode;
}

export const Funnel = <T extends string[]>({ activities, currentActivity, children }: IFunnelProps<T>) => {
    const validChildren = Children.toArray(children)
        .filter(isValidElement)
        .filter(child => (child.props as IActivityProps<T>)?.name in activities)

    const currentChildren = validChildren.filter(child => (child.props as IActivityProps<T>)?.name === currentActivity);

    return (
        <>{currentChildren}</>
    )
}

interface IStepProps<T extends string[]> {
    name: T[number];
    children: ReactNode;
}

export const Step = <T extends string[]>({ children }: IStepProps<T>) => {
    return <>{children}</>
}
