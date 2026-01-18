export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row gap-4 justify-between">
        <span>
          © {currentYear} Restroworks. All rights reserved.
        </span>

        <span>
          Built with Next.js & Payload CMS
        </span>
      </div>
    </footer>
  );
}