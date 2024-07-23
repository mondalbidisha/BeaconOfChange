'use client';
import Header from '@/components/Header';

export default function AppLayout({ children }: any) {
  return (
    <div>
      <div className="absolute z-20 w-full">
        <Header />
      </div>
      <>{children}</>
    </div>
  );
}
