import {Button} from './Button';
import {render} from '@testing-library/react';

describe('Button Test', () => {
    it('Button Type Check', () => {
        const {getByTestId} = render(
            <Button
                elementName='div'
                type='button'
                isDisabled={false}
                data-testid="my-button"
            />
        )

        const button = getByTestId('my-button');

        expect(button).toHaveReturnedWith(expect.any(HTMLAnchorElement));
    })
})
