import React from 'react';
import TaskItem from "./TaskItem";
import {Heading, VStack} from "@chakra-ui/react";

const TaskList = ({tasks, onDelete, onEdit, onToggle}) => {
    return (
        <div>
            <VStack
                align='strech'
                spacing={2}
            >
                <Heading
                    size='2xl'
                    color='hotpink'
                    as='u'
                >Task List:
                </Heading>
                {tasks.map((el) => < TaskItem
                        el={el}
                        key={el.id}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onToggle={onToggle}
                    />
                )
                }
            </VStack>

        </div>
    );
};

export default TaskList;