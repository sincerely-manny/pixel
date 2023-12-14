import Double from '../double';

import tableData from './data/tableData';
import Signature from './images/signature.inline.svg';

const AccountTable = () => (
  <>
    <div>
      <h6 className="text-3xs font-medium uppercase opacity-90">Subscription Terms</h6>
      <div className="grid grid-cols-2 text-2xs leading-[2em]">
        <div className="grid grid-cols-[auto_auto]">
          <Double>Contract Start Date:</Double>
          <time dateTime="2022-07-30" className="font-medium opacity-90">
            7/30/2022
          </time>
          <Double>Contract End Date:</Double>
          <time dateTime="2022-07-29" className="font-medium opacity-90">
            7/29/2023
          </time>
        </div>
        <div className="grid grid-cols-[auto_auto]">
          <Double>Billing Terms:</Double>
          <span className="font-medium opacity-90">Net 45</span>
          <Double>Billing Frequency:</Double>
          <span className="font-medium opacity-90">Annually</span>
        </div>
      </div>
    </div>
    <div className="border-gradient-td-white my-[1.125em] overflow-hidden rounded p-[1px] text-2xs">
      <div className="relative grid h-8  grid-cols-[2fr_1fr_1fr] items-center text-4xs uppercase">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-white opacity-40 mix-blend-overlay" />
        <Double className="indent-3.5">Services</Double>
        <Double>Qty</Double>
        <Double>Annual Price</Double>
      </div>
      {tableData.map((row, i) => (
        <div className="relative grid h-8 grid-cols-[2fr_1fr_1fr] items-center" key={row[0]}>
          {i % 2 === 0 && (
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-white opacity-20 mix-blend-overlay" />
          )}
          <Double className="indent-3.5">{row[0]}</Double>
          <span className="opacity-90">{row[1]}</span>
          <span className="font-medium opacity-90">{row[2]}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-[2fr_1fr_1fr] items-center text-xs">
      <Double>
        <Signature className="h-9 w-auto" />
      </Double>
      <Double>1-year Total:</Double>
      <span className="opacity-90">$255,000</span>
    </div>
  </>
);

export default AccountTable;
