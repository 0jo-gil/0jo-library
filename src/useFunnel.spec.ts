import React from "react";
import { useFunnel } from "./useFunnel"
import { renderHook } from "@testing-library/react-hooks";

const COMPONENT_LIST = ['Funnel1', 'Funnel2'];


describe('useFunnel', () => {
    it('Funnel 컴포넌트 렌더링 확인', () => {
        const {result} = renderHook(() => useFunnel(COMPONENT_LIST))

        expect(result.current[0].currentActivity).toBe('Funnel1')

    })
})