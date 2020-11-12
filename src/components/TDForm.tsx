import React, { useRef } from 'react';

interface ITDFormProps {
    onAdd(title: string): void,
};

export const TDForm: React.FC<ITDFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');
        //
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // };

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // console.log(title);
            // setTitle('');
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    };

    return (
        <div className='input-field mt2'>
            <input
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type='text'
                id='title'
                placeholder='Введите название дела'
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='tiile' className='active'>
                Введите название дела
            </label>
        </div>
    );
};

export default TDForm;