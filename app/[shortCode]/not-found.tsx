import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Link Not Found</h1>
        <p className="text-gray-300 mb-6">
          Sorry, this short link doesn't exist or may have expired.
        </p>
        <Link
          href="/"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
