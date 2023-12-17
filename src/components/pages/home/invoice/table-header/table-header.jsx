import Double from '../double';

const TableHeader = () => (
  <div className="mb-6">
    <h5 className="font-serif text-2xl">
      <Double>Acme Corp.</Double>
    </h5>
    <div className="grid grid-cols-2 py-4 text-2xs leading-[2em]">
      <hr className="col-span-2 mb-4 mix-blend-overlay" />
      <div>
        <p>
          <Double>Acme Software Co.</Double>
        </p>
        <p>
          <Double>50 E Rio Grande Pkwy</Double>
        </p>
        <p>
          <Double>Tempe, AZ 85281 United States</Double>
        </p>
      </div>
      <div>
        <p>
          <Double>Wasatch Cloud Inc.</Double>
        </p>
        <p>
          <Double>18560 West Sunset Blvd.</Double>
        </p>
        <p>
          <Double>LOS Angeles, CA 90046 US</Double>
        </p>
      </div>
      <hr className="col-span-2 mt-4 mix-blend-overlay" />
    </div>
  </div>
);

export default TableHeader;
