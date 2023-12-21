'use server';

import trialFormSchema from './data/schema';

const handleTrialFormSubmit = async (req) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(trialFormSchema.safeParse(req));
    }, 1000);
  });
  const { success, data, error } = await promise;
  return success ? { success, data } : { success, errors: error.format() };
};

export default handleTrialFormSubmit;
