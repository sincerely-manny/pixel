import { z } from 'zod';

const trialFormSchema = z.object({
  email: z.string().trim().min(1, 'Email is a required field').email(),
});

export default trialFormSchema;
