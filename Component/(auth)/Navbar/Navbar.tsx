'use client'

import { IoIosArrowBack } from 'react-icons/io';
import sty from './Navbar.module.css';
import { Link, usePathname, useRouter } from '../../../i18n/navigation'; // Path relative ที่ถูกต้อง
import { useTranslations } from 'next-intl';
import React, { useTransition } from 'react';
import { defaultLocale } from '@/i18n/routing';

const NavbarLogin = () => {
  const router = useRouter();
  const currentPathname = usePathname(); // ได้ pathname ที่ Normalized (ไม่มี Locale Prefix)

  const t = useTranslations('NavbarLogin');
  const [isPending, startTransition] = useTransition();


  const isLoginPage = currentPathname === '/login';

  const backButtonHref = isLoginPage ? '/' : '/login';

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const currentUrl = new URL(window.location.href);
      const newPathnameWithLocale = `/${nextLocale}${currentPathname === '/' ? '' : currentPathname}`;
      currentUrl.pathname = newPathnameWithLocale;
      router.push(currentUrl.toString());
    });
  };

  return (
    <nav className={sty.nav}>
      <div className="w-full flex justify-between items-center">
        <span className={sty.backMain}>
          <Link
            href={backButtonHref}
            locale={backButtonHref === '/' ? defaultLocale : undefined}
          >
            <IoIosArrowBack className={sty.icons} /> {isLoginPage ? t('backtohome') : t('backtologin')}
          </Link>
        </span>


        <span>
          <button onClick={() => onSelectChange("en")} >EN</button>
          <p>|</p>
          <button onClick={() => onSelectChange("th")}>TH</button>
        </span>
      </div>
    </nav>
  )
}
export default NavbarLogin