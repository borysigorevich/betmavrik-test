'use client'
import { PropsWithChildren } from 'react';

interface IErrorInterceptor {
  error?: string;
}

export const ErrorInterceptor = ({
  error,
  children,
}: PropsWithChildren<IErrorInterceptor>) => {
  if (error) {
    throw new Error(error);
  }

  return children;
};
