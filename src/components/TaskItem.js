import React from 'react';
import {Box, Checkbox,HStack, IconButton, Spacer, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

const TaskItem = ({el, onDelete, onEdit, onToggle}) => {
    return (
        <div
            className='list'
            key={el.id}>

            <HStack>

                <Box >


                    <Checkbox
                        isChecked={el.completed}
                        size='lg'
                        colorScheme='blue'
                        onChange={() => onToggle(el.id)}
                    >
                        <Text
                            fontSize='2xl'
                            as={el.completed ? 's' : 'b'}
                        >
                            {el.text}
                        </Text>
                    </Checkbox>

                </Box>

                <Spacer />

                <Box>

                    <IconButton
                        className='iconButton'
                        colorScheme={'yellow'}
                        aria-label='edit'
                        icon={<EditIcon/>}
                        onClick={() => onEdit(el.id)}
                    />
                    <IconButton
                        aria-label='delite'
                        colorScheme='yellow'
                        icon={<DeleteIcon/>}
                        onClick={() => onDelete(el.id)}
                    />

                </Box>

            </HStack>


        </div>
    );
};

export default TaskItem;