import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-10 py-40">
      <h1 className="text-center text-6xl font-bold text-[#026295]">
        Not found – 404!
      </h1>
      <div>
        <Link href="/" className="text-xl uppercase text-blue-500">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
