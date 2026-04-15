"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function AuthButton() {
  const { isAuthenticated, logout, user } = useAuth();
  const params = useParams();
  const locale = params.locale || 'ko';

  if (!isAuthenticated) {
    return (
      <Link
        href={`/${locale}/login`}
        className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        로그인
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 hidden md:inline">
        {user?.email?.split('@')[0]}
      </span>
      <button
        onClick={() => logout()}
        className="text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        로그아웃
      </button>
    </div>
  );
}
