import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet asperiores  consequatur, molestiae nobis nostrum provident tenetur voluptates. Ea, saepe?',
    isOpen: true,
};
export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet asperiores  consequatur, molestiae nobis nostrum provident tenetur voluptates. Ea, saepe?',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
