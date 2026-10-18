import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_OFFSET = 96;

/** Jumps to the availability panel on the home page, navigating there first if needed. */
export default function AvailabilityLink({
  children,
  className,
  ariaCurrent,
}: {
  children: React.ReactNode;
  className?: string;
  ariaCurrent?: 'page' | undefined;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.getElementById('availability');
      if (el) {
        const top = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    navigate('/#availability');
  };

  return (
    <Link className={className} to="/#availability" onClick={onClick} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}
