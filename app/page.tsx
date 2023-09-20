import Card from "@/components/card/Card";
// import Test from "@/components/test/Test";
export default function Home() {
  return (
    <main className="container mx-auto my-10 flex min-h-[calc(100vh-92px)] flex-col gap-5 px-5">
      <Card />
      <Card />
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   {/* <Test className="text-red-700" /> */}
    //   <Card />
    // </main>
  );
}