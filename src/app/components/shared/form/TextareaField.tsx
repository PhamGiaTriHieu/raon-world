import {Field, FieldError, FieldLabel} from '@/components/ui/field';
import {Textarea} from '@/components/ui/textarea';
import React from 'react';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

interface TextareaFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  rows?: number;
  className?: string;
}

const TextareaField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  required = false,
  rules,
  rows = 8,
  className,
}: TextareaFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <Field data-invalid={!!fieldState.error} className={className}>
          <FieldLabel htmlFor={name}>
            {label} {required && <span className="text-destructive">*</span>}
          </FieldLabel>
          <Textarea
            {...field}
            id={name}
            placeholder={placeholder}
            rows={rows}
            aria-invalid={!!fieldState.error}
            className="bg-input-bg min-h-[162px] text-black-6 border-none"
          />
          {fieldState.error && (
            <FieldError className="text-start" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default TextareaField;
