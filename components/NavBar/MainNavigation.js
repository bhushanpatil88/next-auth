import Link from 'next/link'
import {signOut,useSession} from 'next-auth/react'

import classes from './MainNavigation.module.css';
import { useRouter } from 'next/router';

const MainNavigation = () => {
  const { data: session } = useSession()
  const {push,asPath} = useRouter();
  const signOutHandler = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' })

		push(data.url)
	}

  return (
    <header className={classes.header}>
      <Link href='/'>
        <div className={classes.logo}>Home Page</div>
      </Link>
      <nav>
        <ul>
        <li>
            {session && <Link href='/profile'>Profile</Link>}
          </li>
          <li>
           {!session && <Link href='/auth/Login'>Login</Link>}
          </li>
          <li>
            {session && <button onClick={signOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
