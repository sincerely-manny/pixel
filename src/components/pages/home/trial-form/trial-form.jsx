'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
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
    setValue,
  } = useForm({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      email: '',
    },
  });
  const [formDisabled, setFormDisabled] = useState(false);
  const [buttonState, setButtonState] = useState('default');

  const onTrialFormSubmit = async (res) => {
    setFormDisabled(true);
    setButtonState('loading');
    try {
      const { errors, success } = await handleTrialFormSubmit(res);
      if (success) {
        setButtonState('success');
      } else if (errors) {
        Object.entries(errors).forEach(([field, { _errors: err }]) => {
          if (field !== '_errors') {
            setError(field, {
              type: 'server',
              message: err?.join(', '),
              shouldFocus: true,
            });
          } else {
            setError('root.serverError', {
              type: 'server',
              message: err?.join(', '),
            });
          }
        });
      }
    } catch (err) {
      setValue('email', 'Oops! Something went wrong', {
        shouldValidate: false,
        shouldDirty: false,
      });
      setFormDisabled(true);
      setButtonState('error');
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
        disabled={formDisabled}
      >
        <Button type="submit" disabled={formDisabled} state={buttonState}>
          Free Trial
        </Button>
      </TextInput>
    </form>
  );
};

export default TrialForm;
