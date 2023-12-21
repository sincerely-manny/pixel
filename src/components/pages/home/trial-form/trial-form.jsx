'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Button from 'components/shared/button';
import TextInput from 'components/shared/text-input';

import handleTrialFormSubmit from './data/action';
import trialFormSchema from './data/schema';

const TrialForm = () => {
  const form = useForm({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onTrialFormSubmit = async (data) => {
    await handleTrialFormSubmit(data);
  };

  return (
    <form action="/" onSubmit={form.handleSubmit((data) => onTrialFormSubmit(data))}>
      <TextInput
        placeholder="Enter your email"
        name="email"
        className="max-w-[500px]"
        {...form.register('email')}
      >
        <Button type="submit">Free Trial</Button>
      </TextInput>
    </form>
  );
};

export default TrialForm;
