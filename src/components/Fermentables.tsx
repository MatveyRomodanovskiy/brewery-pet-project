import React, {useState} from 'react';
import Extract from './Extract';
import Grain from './Grain';

function Fermentables() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <h1 onClick={() => setVisible(!visible)}>Fermentables</h1>
            <div>
                {visible && <Grain/>}
                {visible && <Extract/>}
            </div>
        </div>
    );
}

export default Fermentables;