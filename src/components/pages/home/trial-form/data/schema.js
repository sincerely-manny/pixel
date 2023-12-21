import { z } from 'zod';

const trialFormSchema = z.object({
  email: z.string().email(),
});

export default trialFormSchema;
