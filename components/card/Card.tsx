import Image from "next/image";

export default function Card() {
  return (
    <div className="relative flex h-[390px] w-full rounded-xl border border-[#ffa500]">
      <div className="relative flex-[30%] p-[14px]">
        <div className="flex-center absolute right-8 h-9 w-28 rounded-bl-xl rounded-br-xl bg-[#191D88] font-bold text-white">
          دوبله فارسی
        </div>
        <Image width={263} height={362} src="/assassins.png" alt="assassins" />
      </div>
      <div className="mt-16 flex w-full flex-col pl-5">
        <p className="text-custom-black text-xl">
          <strong className="font-bold">Assassins creed</strong>
          <span className="font-light">(2023)</span>
        </p>
        <p className="text-xl font-bold">قاتلان عقیده</p>
        <div className="my-6 flex items-center gap-2">
          <div className="rounded-md bg-[#EAEAEA] px-3 py-1 text-xs font-semibold text-[#808080]">
            140 دقیقه
          </div>
          <div className="rounded-md bg-[#EAEAEA] px-3 py-1 text-xs font-semibold text-[#808080]">
            آمریکا
          </div>
          <div className="rounded-md bg-[#EAEAEA] px-3 py-1 text-xs font-semibold text-[#808080]">
            انیمیشن، اکشن، کمدی
          </div>
          <div className="rounded-md bg-[#EAEAEA] px-3 py-1 text-xs font-semibold text-[#808080]">
            %86 رضایت
          </div>
        </div>
        <div className="text-custom-black mb-4 text-sm">
          <span className="font-semibold">بازیگران: </span>
          <span>Ashok Selvan، Nikhila Vimal، Sunil Sukhada</span>
        </div>
        <div className="text-custom-black mb-4 text-sm">
          <span className="font-semibold">کارگردان: </span>
          <span>T. Senthil Paramasivam</span>
        </div>
        <div className="text-custom-black w-full rounded-md bg-[#EAEAEA] px-2 py-3 text-xs font-semibold">
          یک افسر پلیس به نام سومیر به کمک همکار خود مقداری کوکائین از یک
          فروشنده مواد مخدر...
        </div>
        <button className="mr-auto mt-10 h-12 w-40 rounded-tl-xl rounded-tr-xl bg-[#ffa500] font-semibold">
          مشاهده فیلم
        </button>
      </div>
      <div className="absolute left-5 top-3 h-8 w-8 rounded-md bg-yellow-500"></div>
    </div>
  );
}
