import FormEntry from './FormEntry';

export default {
  title: 'components/FormEntry',
  component: FormEntry,
};

const Template = args => <FormEntry {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Add lean coffee note',
};
