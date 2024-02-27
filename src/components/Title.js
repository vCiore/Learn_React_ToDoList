import React from 'react';
import {Heading} from "@chakra-ui/react";

const Title = ({title}) => {
    return (
        <div className='title'>
            <Heading
                size='2xl'
                colorScheme='pink'
            >
                {title}
            </Heading>
        </div>
    );
};

export default Title;