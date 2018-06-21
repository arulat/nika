import React from 'react';
import AutoFocusInput from '../forms/AutoFocusInput';
import AutoFocusInputWithForwardRef from '../forms/AutoFocusInputWithForwardRef';

const AutoFocusInputExample = (props) => {
    let textInput = React.createRef();
    return (<div>
                <AutoFocusInput/>
                <AutoFocusInputWithForwardRef ref={textInput}/>
            </div>)
};


export default AutoFocusInputExample;