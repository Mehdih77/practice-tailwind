import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Home({ className }: { className: string }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="group mx-4 flex h-80 w-full min-w-[260px] flex-col gap-4 rounded-lg border-4 border-orange-700 bg-teal-500 hover:bg-teal-600 sm:w-[580px]">
        <div className="flex h-24 items-center justify-between gap-3 px-3">
          <div className="rounded-lg border-2 border-black p-4 group-hover:border-sky-600">
            <Image
              className="sm:w-32 lg:w-60"
              src="/next.svg"
              width={60}
              height={60}
              alt="nextjs"
            />
          </div>
          <div className="cursor-pointer font-bold text-cyan-700 underline">
            Hello World!
          </div>
        </div>
        <div
          className={cn(
            "flex-1 px-3 text-sm leading-4 text-gray-600 first-letter:text-3xl first-letter:text-gray-800 group-hover:font-bold group-hover:text-yellow-500",
            className,
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente
          minus reprehenderit recusandae suscipit dignissimos ex molestias
          quidem libero perspiciatis, ipsum ratione veritatis totam iusto
          similique deleniti odit alias sint!
        </div>
        <div className="mx-auto text-primary text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hover Me :)
        </div>
        <div className="flex h-10">
          <button className="w-1/2 bg-blue-600 font-bold text-white hover:bg-blue-800">
            Add
          </button>
          <button className="w-1/2 bg-red-600 font-bold text-white hover:bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}
