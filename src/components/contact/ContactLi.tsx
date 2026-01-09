import type { ComponentType, ReactNode } from "react";

interface ContactLiProps {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  iconFill?: boolean;
  href?: string;
  children: ReactNode;
  openInNewTab?: boolean;
}

export const ContactLi = ({
  Icon,
  iconFill = true,
  href,
  children,
  openInNewTab = true,
}: ContactLiProps) => {
  const target = openInNewTab ? "_blank" : undefined;
  const rel = openInNewTab ? "noopener noreferrer" : undefined;

  return (
    <li className="flex items-center gap-x-2">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600">
        <Icon
          className="h-3.5 w-3.5 text-white"
          fill={iconFill ? "currentColor" : "none"}
          stroke={iconFill ? "none" : "currentColor"}
          strokeWidth={iconFill ? 0 : 2}
        />
      </div>
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className="transition-colors hover:text-sky-700"
        >
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </li>
  );
};
