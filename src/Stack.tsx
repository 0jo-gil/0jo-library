
export type StackElementType = {
    name: string;
    component: JSX.Element;
}

interface IStack {
    elements: StackElementType[];
    currentElement: StackElementType;
}


//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8
//https://blog.itcode.dev/projects/2022/06/10/react-components-library-starter

//https://velog.io/@catca/npm-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8

export const Stack = ({elements, currentElement}: IStack) => {

    return (
        <div>
            {elements.map((element, index) => (

                <div key={index}>{element.component}</div>
            ))}
        </div>
    )
}

