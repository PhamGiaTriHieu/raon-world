import {Field, FieldError, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url';
  required?: boolean;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  className?: string;
}

const InputField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  // required = false,
  rules,
  className,
}: InputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <Field data-invalid={!!fieldState.error} className={className}>
          <FieldLabel
            className="text-body-18 font-semibold text-label-form font-form"
            htmlFor={name}
          >
            {/* {label} {required && <span className="text-destructive">*</span>} */}
            {label}
          </FieldLabel>
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            aria-invalid={!!fieldState.error}
            className="placeholder:text-black-6 h-[62px] bg-input-bg border-none"
          />
          {fieldState.error && (
            <FieldError className="text-start" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default InputField;
