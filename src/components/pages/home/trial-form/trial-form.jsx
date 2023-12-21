'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Button from 'components/shared/button';
import TextInput from 'components/shared/text-input';

import handleTrialFormSubmit from './action';
import trialFormSchema from './data/schema';

const TrialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onTrialFormSubmit = async (res) => {
    const { success, data, errors } = await handleTrialFormSubmit(res);
    if (success) {
      console.log('success', data);
    } else if (errors) {
      Object.entries(errors).forEach(([field, { _errors: err }]) => {
        if (field !== '_errors') {
          setError(field, {
            type: 'server',
            message: err?.join(', '),
            shouldFocus: true,
          });
        }
      });
    }
  };

  return (
    <form action="/" onSubmit={handleSubmit((data) => onTrialFormSubmit(data))}>
      <TextInput
        placeholder="Enter your email"
        name="email"
        className="max-w-[500px]"
        {...register('email')}
        aria-invalid={errors.email ? 'true' : 'false'}
        error={errors.email?.message}
      >
        <Button type="submit">Free Trial</Button>
      </TextInput>
    </form>
  );
};

export default TrialForm;
