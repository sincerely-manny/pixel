import Button from 'components/shared/button';

const { default: Link } = require('components/shared/link');

const Links = () => (
  <div className="flex items-center justify-end gap-8 font-medium">
    <Link to="/">Contact Sales</Link>
    <Button size="sm" theme="white-filled">
      Book a Demo
    </Button>
  </div>
);

export default Links;
