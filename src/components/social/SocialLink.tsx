import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}