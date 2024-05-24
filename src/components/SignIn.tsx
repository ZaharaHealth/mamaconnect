import { Icons } from '@/components/Icons'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'
import Image from 'next/image'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        {/* <Icons.logo className='mx-auto h-6 w-6' /> */}
        <div className='mx-auto h-20 w-20' ><Image src="/logo.png" height={60} width={60} alt='logo' /></div>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a MamaConnect account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        New to MamaConnect?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn
