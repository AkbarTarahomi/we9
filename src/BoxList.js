import React, {useState} from 'react'

export const BoxList = () => {
    const list = ['w1', 'w2', 'w3'];
    const [items, setItems] = useState([...list])
    const AddNewBox = () => {
        setItems([...items, 's1']);
        console.log(items);
    }
    return (
        <div>
            <h1>List:</h1>
            <button onClick={() => AddNewBox()}>Click</button>
            {items.map((item, i) =>
                <div key={i}>{item}</div>
            )}
        </div>
    )
}
