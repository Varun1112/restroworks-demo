import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

type HeaderProps = {
  locale: string;
};

export default function Header({ locale }: HeaderProps) {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-lg font-bold">
          Restroworks
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href={`/${locale}`}
            className="hover:underline underline-offset-4"
          >
            Home
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="hover:underline underline-offset-4"
          >
            Contact
          </Link>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
