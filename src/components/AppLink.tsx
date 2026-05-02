import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to?: string;
  href?: string;
  children: ReactNode;
}

const isExternalHref = (value: string) =>
  /^(https?:|mailto:|tel:)/.test(value);

const AppLink = ({ to, href, children, ...props }: AppLinkProps) => {
  const destination = href || to || "#";

  if (isExternalHref(destination)) {
    return (
      <a href={destination} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={destination} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
