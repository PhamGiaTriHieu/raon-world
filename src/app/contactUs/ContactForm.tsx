'use client';

import {useForm} from 'react-hook-form';
import {FieldGroup} from '@/components/ui/field';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import InputField from '@/components/shared/form/InputField';
import TextareaField from '@/components/shared/form/TextareaField';
import {IconArrowUpRight, IconEmail, IconLocation} from '@/assets';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  notes: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {control, handleSubmit, reset} = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      notes: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with  API endpoint
      console.log('Form data:', data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-200 mx-auto bg-white rounded-[24px] p-13">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-form">
        <FieldGroup>
          {/* Full Name */}
          <InputField
            name="fullName"
            control={control}
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            required
            rules={{
              required: 'Full name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            }}
          />

          {/* Email */}
          <InputField
            name="email"
            control={control}
            label="Contact Email"
            placeholder="Enter your email"
            type="email"
            required
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
          />

          {/* Company */}
          <InputField
            name="company"
            control={control}
            label="Company Name"
            placeholder="Enter your company name"
            type="text"
          />

          {/* Phone */}
          <InputField
            name="phone"
            control={control}
            label="Phone Number (optional)"
            placeholder="Enter your phone number"
            type="tel"
            rules={{
              pattern: {
                value:
                  /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                message: 'Invalid phone number',
              },
            }}
          />

          {/* Notes */}
          <TextareaField
            name="notes"
            control={control}
            label="Notes"
            placeholder="Enter here"
            rows={6}
            // required
            rules={{
              required: 'Notes are required',
              minLength: {
                value: 10,
                message: 'Notes must be at least 10 characters',
              },
            }}
          />
        </FieldGroup>

        {/* Submit Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✓ Your message has been sent successfully! We&apos;ll get back to
              you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-200">
              ✗ Something went wrong. Please try again later.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center pt-10">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="max-w-50 w-full rounded-[100px] h-[62px] flex p-3 gap-0"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <p className="flex-1 max-w-[126px] w-full text-body-18-semi-bold text-white tracking-[-2%] leading-[20.8px] text-center">
                Send Now
              </p>
            )}

            <div className="size-[38px] rounded-[100px] bg-[#FFFFFF33] flex items-center justify-center ml-2">
              <IconArrowUpRight />
            </div>
          </Button>
        </div>

        <div className="bg-[#EFEFF1] h-[158px] w-full rounded-3xl flex items-center p-8 lg:gap-x-20">
          <div className="max-w-[226px] w-full ">
            <IconLocation width={17} height={20} />
            <p className="text-body-20 font-bold text-[#858AB7] text-start my-2">
              Office
            </p>
            <p className="text-body-16 text-black-3 text-start tracking-tightest mb-2">
              20/3 Ky Dong, Nhieu Loc Ward, <br /> Ho Chi Minh City, Viet Nam,
              70000
            </p>
          </div>

          <div className="max-w-[226px] w-full ">
            <IconEmail width={17} height={20} />
            <p className="text-body-20 font-bold text-[#858AB7] text-start my-2">
              Email
            </p>
            <p className="text-body-16 text-black-3 text-start tracking-tightest mb-2">
              contact@raonworldsolution.com
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
