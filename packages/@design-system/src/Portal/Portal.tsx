import { ReactNode, useEffect, useState } from "react"
import ReactDOM from "react-dom";

type PortalProps = {
    children: React.ReactNode;
    containerId?: string;
}

export const Portal: React.FC<PortalProps> = ({
    children,
    containerId = '0jo-portal'
}) => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let element = document.getElementById(containerId);

        if (element) return;

        element = document.createElement('div');
        element.setAttribute('id', containerId);

        document.body.appendChild(element);

        setContainer(element);

        return () => {
            if (element) {
                document.body.removeChild(element);
            }
        }
    }, [containerId])

    return container ? ReactDOM.createPortal(children, container) : null;
}