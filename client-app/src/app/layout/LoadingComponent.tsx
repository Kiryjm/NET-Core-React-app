import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
    //question mark after prop name make it optional!
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return(
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}