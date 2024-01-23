import { render } from "@testing-library/react"
import { Input } from "./Input"

describe('Input Test', () => { 
    it('should render the input correctly', () => {
        render(<Input name='name' label="name" />)
        expect(document.body.querySelectorAll('input')).toHaveLength(1);
    })

    it('Input Type Check', () => {
        const {getByTestId} = render(
            <Input
                type='email'
                data-testid="my-input"
            />
        )

        const input = getByTestId('my-input');

        expect(input)
            .toHaveProperty('type', 'email');
    })
})