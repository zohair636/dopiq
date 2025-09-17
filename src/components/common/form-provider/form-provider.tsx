import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import type {
  FormFieldWrapperProps,
  FormProviderProps,
} from "./types/form-provider-types";
import type { FC } from "react";
import type { ZodTypeAny } from "zod/v3";

export const FormProvider = <T extends ZodTypeAny>({
  onSubmit,
  defaultValues,
  schema,
  children,
}: FormProviderProps<T>) => {
  const form = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export const FormFieldWrapper: FC<FormFieldWrapperProps> = ({
  name,
  children,
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
