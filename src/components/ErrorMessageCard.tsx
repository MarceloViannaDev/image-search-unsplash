import { Toast, ToastProps } from 'flowbite-react';
import { HiFire } from 'react-icons/hi';

interface ErrorMessageCardProps extends ToastProps {
  position: string;
  errorMessage?: string;
  message: string;
}

export default function ErrorMessageCard({
  errorMessage,
  ...rest
}: ErrorMessageCardProps) {
  return (
    <Toast {...rest} className="bg-gray-800 text-yellow-200">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">
        <span className="text-yellow-200">{errorMessage}</span>
      </div>
      <Toast.Toggle />
    </Toast>
  );
}
