import Invoice from 'components/pages/home/invoice';
import Button from 'components/shared/button';

const spotlights = [
  [
    '3x',
    'Faster Analysis Cycles',
    'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
  ],
  [
    '10%+',
    'Savings on Costs',
    'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
  ],
  [
    '30',
    'Day Setup',
    'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
  ],
];

const Home = () => (
  <div className="grid grid-cols-12 items-center gap-x-10 gap-y-[7.4rem]">
    {/* FREE TRIAL FORM */}
    <div className="relative col-span-6 flex flex-col gap-10">
      <div className="absolute left-0 top-0 aspect-square w-full -translate-y-2/3 rounded-full bg-primary-1 opacity-[15%] blur-[200px]" />
      <div className="relative flex flex-col gap-7">
        <h1 className="drop-shadow-heading-white">
          Unlock valuable insights from subscription data
        </h1>
        <p className="text-xl">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
      </div>
      <form action="/">
        <div className="border-gradient-td-white relative w-[500px] rounded-2xl p-1.5">
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl">
            <div className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-10 mix-blend-overlay" />
            <div className="absolute left-0 top-[-30%] h-[160%] w-full bg-white-gradient-267deg-to-17p mix-blend-overlay" />
            <div className="absolute left-0 top-0 h-[160%] w-full bg-white-gradient-122deg-to-50p mix-blend-overlay" />
          </div>
          <div className="relative flex w-full items-stretch justify-stretch gap-1.5">
            <input
              type="text"
              placeholder="Your business email..."
              name="email"
              className="remove-autocomplete-styles grow appearance-none rounded-full bg-transparent pl-7 pr-2
              text-base text-white opacity-80 outline-0 
              placeholder:bg-violet-gradient placeholder:bg-clip-text placeholder:text-transparent
              autofill:text-base autofill:text-white [&:-webkit-autofill]:[-webkit-text-fill-color:theme('colors.white')]"
            />
            <Button type="submit">Free Trial</Button>
          </div>
        </div>
      </form>
    </div>
    {/* END FREE TRIAL FORM  */}
    {/* INVIOCE */}
    <Invoice className="col-span-6" />
    {/* END INVIOCE */}
    {/* SPOTLIGHTS */}
    {spotlights.map(([title, subtitle, description]) => (
      <div className="col-span-4 grid grid-cols-4 gap-x-10 pb-6" key={title}>
        <div className="col-span-3 flex flex-col gap-y-8">
          <div className="flex flex-col gap-3">
            <div className="relative w-min">
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-primary-1 opacity-30 blur-[100px]" />
              <h3 className="relative bg-violet-gradient-2 bg-clip-text pr-2 font-heading text-4xl text-transparent">
                {title}
              </h3>
            </div>
            <h4 className="text-xl">{subtitle}</h4>
          </div>
          <hr className="text-white opacity-10" />
          <p className="text-lg">{description}</p>
        </div>
      </div>
    ))}
    {/* END SPOTLIGHTS */}
  </div>
);

export default Home;
