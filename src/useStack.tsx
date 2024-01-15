import { IActivityProps, NonEmptyArray, Stack, Step } from "./Stack";

type StackProps<S extends NonEmptyArray<string>> = Omit<IActivityProps<S>, 'steps' | 'step'>;

type StackComponent<S extends NonEmptyArray<string>> = ((props: StackProps<S>) => JSX.Element) & {
    Step: (props: IActivityProps<S>) => JSX.Element;
}

export const useStack = <S extends NonEmptyArray<string>>(
    activities: S,
    options?: {
        initialActivity?: S[number];

        onActivityChange?: (activity: S[number]) => void;
    }
): [
        StackComponent<S>,
        (activity: S[number]) => void,
    ] => {
    const StackComponent = (props: StackProps<S>) => {
        const initial = options?.initialActivity ?? activities[0];

        return Object.assign(
            (props: StackProps<S>) => <Stack activities={activities} currentActivity={initial} {...props} />,
            {
                Step
            }
        )
    }

    const onActivityChange = (activity: S[number]) => {
        options?.onActivityChange?.(activity);
    }

    return [
        StackComponent,
        onActivityChange
    ] as any;
}