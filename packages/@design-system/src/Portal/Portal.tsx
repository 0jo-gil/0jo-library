import { PropsWithChildren, useState } from 'react'
import { createPortal } from 'react-dom'

const usePortal = () => {
    const [isPortalMounted, setIsPortalMounted] = useState(() => {
        if(typeof window === 'undefined') {
            return null
        }

        if(!document) {
            return null
        }

        const isTargetMounted = document?.getElementById('0jo-portal-root')

        if(isTargetMounted) return isTargetMounted

        const portalRoot = document.createElement('div')
        portalRoot.setAttribute('id', '0jo-portal-root')

        return document.body.appendChild(portalRoot)
    })

    return isPortalMounted;
}

export const Portal = ({children}: PropsWithChildren) => {

    const target = usePortal();

    if(!target) return null

    return createPortal(
        <>{children}</>,
        target
    )
}