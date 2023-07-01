import React, {useState} from 'react';
import BuildRow from "../Service/BuildRow";

const Grain = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h2 onClick={() => setVisible(!visible)}>Grain</h2>
            {visible && <BuildRow/>}
        </div>
    );
};

export default Grain;