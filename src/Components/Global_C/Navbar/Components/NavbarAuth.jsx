import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';

function NavbarAuth() {

    const { user } = useUser();

    return (
        <div className='navbar-auth flex items-center gap-3'>
            {
                user ? (
                    <UserButton />
                ) : (
                    <>
                        {/* Sign Up */}
                        <SignUpButton
                            mode='modal'
                            className='hover:text-primary-color transition'
                        />
                        {/* Sign In */}
                        <SignInButton
                            mode='modal'
                            className='bg-primary-color text-white rounded-md py-2 px-5 transition'
                        />
                    </>
                )
            }
        </div>
    )
}

export default NavbarAuth;