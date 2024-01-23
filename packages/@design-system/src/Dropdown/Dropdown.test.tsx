import { fireEvent, render } from "@testing-library/react"
import Dropdown, { useDropdownState } from "./Dropdown"

describe('Dropdown Test', () => {

    it(
        'should render the dropdown',
        () => {
            const TestComponent = () => {
                const { isOpen } = useDropdownState();

                return (
                    <>
                        <Dropdown.Trigger>CLICK</Dropdown.Trigger>

                        {isOpen && (
                            <Dropdown.Menu>Menu is open</Dropdown.Menu>
                        )}
                    </>
                )
            }

            const { getByText, queryByText } = render(
                <Dropdown>
                    <TestComponent />
                </Dropdown>
            )

            expect(queryByText('Menu is open')).toBeNull();

            fireEvent.click(getByText('CLICK'));
            expect(queryByText('Menu is open')).not.toBeNull();

            fireEvent.click(getByText('CLICK'));
            expect(queryByText('Menu is open')).toBeNull();

        }
    )
})
