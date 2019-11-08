import React from 'react';
import {Redirect} from 'react-router-dom';

interface Callback {
	ACCESS_TOKEN: string | null;
	EXPIRES_IN: string | null;
	TOKEN_TYPE: string | null;
}

const Callback: React.FC<Callback> = (props) => {
    saveSpotifyData(props.ACCESS_TOKEN, props.EXPIRES_IN, props.TOKEN_TYPE);
    return  <Redirect  to="/admin" />;
};

const saveSpotifyData = (ACCESS_TOKEN: string | null, EXPIRES_IN: string | null, TOKEN_TYPE: string | null) => {
    if (ACCESS_TOKEN) {
        localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);
    }
    if (EXPIRES_IN) {
        localStorage.setItem('EXPIRES_IN', EXPIRES_IN);
    }
    if (TOKEN_TYPE) {
        localStorage.setItem('TOKEN_TYPE', TOKEN_TYPE);
    }
};

export default Callback;
