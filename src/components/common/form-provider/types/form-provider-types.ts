import React from "react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import type { ZodTypeAny } from "zod/v3";

export type FormProviderProps<T extends ZodTypeAny> = {
  onSubmit: (data: unknown) => void | Promise<void>;
  defaultValues?: Record<string, unknown>;
  schema?: T;
  children: React.ReactNode;
};

export type FormFieldWrapperProps<
  TFieldValues extends FieldValues = FieldValues,
> = {
  name: Path<TFieldValues>;
  children: (
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>
  ) => React.ReactNode;
};
