import FormEntry from './EntryForm';

export default {
  title: 'components/FormEntry',
  component: FormEntry,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = args => <FormEntry {...args} />;

export const Default = Template.bind({});
Default.args = {};
