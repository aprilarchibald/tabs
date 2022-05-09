import React from 'react'


const Tabs = props => {
    const onClickHandler = (e, value) => {
        // alert(value.content);
        props.setDisplayContent(value.content)
    }

    return props.tabs.map( (tab, index) => {
        return <button key = {index} onClick={ (e) => onClickHandler(e, tab) }>{ tab.label }</button>
    });
}

export default Tabs
