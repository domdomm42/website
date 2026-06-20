export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 pt-8">
      <div className="flex justify-center items-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Oudom Lim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
