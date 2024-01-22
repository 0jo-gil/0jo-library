import React, { Ref } from "react";


const Radio = (
    {},
    ref: Ref<HTMLInputElement>
) => {

    return (
        <div>
            <input 
                type='radio'
                ref={ref}
            />
        </div>
    )
}


export const ForwardedRadio = React.forwardRef(Radio);