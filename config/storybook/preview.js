import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shered/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shered/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shered/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
