import React from "react";
import { useFunnel } from "./useFunnel"
import { render } from "react-dom";

const COMPONENT_LIST = ['Funnel1', 'Funnel2'];

jest.mock('./useFunnel', () => {
    return {
        useFunnel: jest.fn().mockImplementation(() => {
            return {
                funnel: COMPONENT_LIST
            }
        })
    }
})


describe('useFunnel', () => {
    it('Funnel 컴포넌트 렌더링 확인', () => {
        
    })
})