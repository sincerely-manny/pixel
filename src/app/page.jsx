import Button from 'components/shared/button';

const Home = () => (
  <div className="grid grid-cols-12 items-center gap-x-10 gap-y-16">
    {/* FREE TRIAL FORM */}
    <div className="relative col-span-6 flex flex-col gap-10">
      <div className="absolute left-0 top-0 aspect-square w-full -translate-y-2/3 rounded-full bg-primary-1 opacity-[15%] blur-[400px]" />
      <div className="relative flex flex-col gap-7">
        <h1 className="drop-shadow-heading-white">
          Unlock valuable insights from subscription data
        </h1>
        <p className="text-xl">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
      </div>
      <form action="/">
        <div className="border-gradient-td-white relative w-[500px] overflow-hidden rounded-2xl">
          <div className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-10 mix-blend-overlay" />
          <div className="absolute left-0 top-[-30%] h-[160%] w-full bg-white-gradient-267deg-to-17p mix-blend-overlay" />
          <div className="absolute left-0 top-0 h-[160%] w-full bg-white-gradient-122deg-to-50p mix-blend-overlay" />
          <div className="relative flex w-full items-center justify-stretch">
            <input
              type="text"
              placeholder="Your business email..."
              name="email"
              className="grow bg-transparent pl-7 pr-2 text-base text-white opacity-80 outline-0 placeholder:bg-violet-gradient placeholder:from-primary-1 placeholder:to-primary-3 placeholder:bg-clip-text placeholder:text-transparent"
            />
            <Button type="submit">Free Trial</Button>
          </div>
        </div>
      </form>
    </div>
    {/* END FREE TRIAL FORM  */}
    {/* INVIOCE */}
    <div className="col-span-6 grid grid-cols-6 gap-x-10">-</div>
    {/* END INVIOCE */}
  </div>
);

export default Home;
