'use server';

import trialFormSchema from './data/schema';

const handleTrialFormSubmit = async (req) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(trialFormSchema.safeParse(req));
    }, 3000);
  });
  const { success, data, error } = await promise;
  if (data.email === 'trigger@server.error') {
    throw new Error('Server error');
  }
  return success ? { success, data } : { success, errors: error.format() };
};

export default handleTrialFormSubmit;
