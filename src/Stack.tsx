import { Children, ReactElement, ReactNode, isValidElement } from "react";

export type NonEmptyArray<T> = readonly [T, ...T[]];

interface IStackProps<S extends NonEmptyArray<string>> {
    activities: S;
    currentActivity: S[number];
    children: Array<ReactElement<IActivityProps<S>>> | ReactElement<IActivityProps<S>>;
}

export interface IActivityProps<S extends NonEmptyArray<string>> {
    name: S[number];
    children: ReactNode;
}


export const Stack = <S extends NonEmptyArray<string>>({
    activities,
    currentActivity,
    children
}: IStackProps<S>) => {

    const validChildren = Children.toArray(children)
        .filter(i => isValidElement(i) && activities.includes((i.props as Partial<IActivityProps<S>>).name ?? '')) as Array<
            ReactElement<IActivityProps<S>>
        >;

    const currentChildren = validChildren.find(child => (child.props as IActivityProps<S>).name === currentActivity);

    return (
        <div>
            {currentChildren}
        </div>
    )
}

export const Step = <S extends NonEmptyArray<string>>({
    children
}: IActivityProps<S>) => {
    return (
        <>{children}</>
    )
}
