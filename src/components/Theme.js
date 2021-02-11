import React, {useState} from 'react'

function Theme() {
    const [dark, setDark] = useState(false);

    const changeMode = () => {
        setDark(!dark);
    }

    return (
        <div className={dark ? 'dark-mode' : 'light-mode'}>
            <div className={'conteiner'}>
                <span className={dark ? 'grey' : 'orange'}>☀️</span>
                <div className={'label-box'} onClick={changeMode}>
                    <label className={dark ? 'white' : 'black'}>dark</label>
                </div>
                <span className={dark ? 'orange' : 'grey'}>☆</span>
            </div>
        </div>
    )
}

export default Theme
