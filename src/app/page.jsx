import Invoice from 'components/pages/home/invoice';
import Button from 'components/shared/button';
import TextInput from 'components/shared/text-input';

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
      <div className="absolute left-1/2 top-0 aspect-square w-[calc(100%+500px)] -translate-x-1/2 -translate-y-2/3 rounded-full bg-violet-radial opacity-[15%]" />

      <div className="relative flex flex-col gap-7">
        <h1 className="drop-shadow-heading-white">
          Unlock valuable insights from subscription data
        </h1>
        <p className="text-xl">
          Analyze your subscription ecosystem for cost optimization and risk management
        </p>
      </div>
      <form action="/">
        <TextInput placeholder="Enter your email" name="email" className="max-w-[500px]">
          <Button type="submit">Free Trial</Button>
        </TextInput>
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
