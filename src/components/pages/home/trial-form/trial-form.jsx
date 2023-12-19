import Button from 'components/shared/button';
import TextInput from 'components/shared/text-input';

const TrialForm = () => (
  <form action="/">
    <TextInput placeholder="Enter your email" name="email" className="max-w-[500px]">
      <Button type="submit">Free Trial</Button>
    </TextInput>
  </form>
);

export default TrialForm;
