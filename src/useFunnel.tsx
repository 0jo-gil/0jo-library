import { Funnel, Step } from "./Funnel";

type FunnelComponent<T extends string[]> = {
    currentActivity: () => JSX.Element;
}

export const useFunnel = <T extends string[]>(
    activities: T,
    options?: {
        initialActivity?: T[number];
        onActivityChange?: (activity: T[number]) => void;
        transitionDuration?: number;
    }
): [
        FunnelComponent<T>,
        (activity: T[number]) => void,
        options?: {
            initialActivity?: T[number];
            onActivityChange?: (activity: T[number]) => void;
            transitionDuration?: number;
        }
    ] => {

    const FunnelComponent = () => {
        const initial = options?.initialActivity ?? activities[0];

        return (
            <Funnel activities={activities} currentActivity={initial}>
                {
                    activities.map((activity, index) => (
                        <Step name={activity} key={activity}>
                            <p>{index}</p>
                        </Step>
                    ))
                }
            </Funnel>
        )
    }

    const onActivityChange = (activity: T[number]) => {
        options?.onActivityChange?.(activity);
    }

    return [
        FunnelComponent,
        onActivityChange,
        options
    ] as any;
}
