import axios from 'axios';

export type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  website?: string;
  spend?: string;
  message?: string;
};

export type LeadResult = { ok: boolean; message?: string; error?: string };

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  if (!input.firstName.trim() || !input.lastName.trim()) {
    return { ok: false, error: 'Please enter your first and last name' };
  }
  if (!input.email || !input.email.includes('@')) {
    return { ok: false, error: 'Please enter a valid email address' };
  }

  const formData = new FormData();
  formData.append('first_name', input.firstName.trim());
  formData.append('last_name', input.lastName.trim());
  formData.append('email', input.email);
  if (input.phone?.trim()) formData.append('phone', input.phone.trim());
  if (input.organization?.trim()) formData.append('organization', input.organization.trim());
  if (input.website?.trim()) formData.append('website', input.website.trim());
  if (input.spend) formData.append('spend', input.spend);
  if (input.message?.trim()) formData.append('message', input.message.trim());

  try {
    const response = await axios.post('/api/lead', formData);
    if (response.data?.ok) {
      return { ok: true, message: response.data?.data?.message || response.data?.message };
    }
    return { ok: false, error: response.data?.error || 'Something went wrong. Please try again.' };
  } catch (error: unknown) {
    const isAxiosError = axios.isAxiosError(error);
    const backendMsg =
      isAxiosError && typeof error.response?.data === 'object'
        ? (error.response?.data as { error?: string })?.error
        : undefined;
    console.error('Error submitting lead:', error);
    return { ok: false, error: backendMsg || 'Failed to submit. Please try again.' };
  }
}
