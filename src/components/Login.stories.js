import Login from './Login.js';

export default {
  title: 'components/Login',
  component: Login,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = args => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
