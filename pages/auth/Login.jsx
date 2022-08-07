import React, { useState } from 'react'
import { useRouter } from 'next/router'


import {Box,Button,Heading,VStack} from '@chakra-ui/react'


import { useSession, signIn } from 'next-auth/react'

import {    BsGoogle } from 'react-icons/bs'

const providers = [
   

	{
		name: 'google',
		Icon: BsGoogle,
	},
]

const Login = () => {
	const { data: session, status } = useSession()
	
	const { push } = useRouter()

	if (status === 'loading') return <Heading>Verifying The User...</Heading>


	if (session) {
        setTimeout(()=>{
            push('/profile')
        },3000)
		return <> <Heading>You are signed in, Redirecting You to Profile Page...
        </Heading> </>
	}

	const authHandler = (provider) => () => signIn(provider)


	return (
		<Box >

			<VStack>
				{providers.map(({ name, Icon }) => (
					<Button
						key={name}
						leftIcon={<Icon />}
						onClick={authHandler(name)}
						textTransform='uppercase'
						w='100%'
                        color='white'
                        backgroundColor='darkblue'

                        
					>
						Sign in with {name}
					</Button>
				))}
			</VStack>
		</Box>
	)
}

export default Login
