/**
 * @jest-environment jsdom
 */

import React from 'react';
import {ForwardedButton} from './Button';
import {render} from '@testing-library/react';

describe('Button Test', () => {
    it('Button Type Check', () => {
        const {getByTestId} = render(
            <ForwardedButton
                as='button'
                type='button'
                data-testid="my-button"
            >?</ForwardedButton>
        )

        const button = getByTestId('my-button');

        expect(button)
            .not
            .toHaveProperty('type', 'submit');
    })

    it('Button Element Name Check', () => {
        render(
            <ForwardedButton
                data-testid="my-button"
                as='span'
            >button</ForwardedButton>
        )

        expect(document.body.querySelectorAll('span')).toHaveLength(1);
    })

    
})