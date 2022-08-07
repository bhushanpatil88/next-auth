import React from 'react'

import { Heading, Text, Grid } from '@chakra-ui/react'
import { useSession,  signOut } from 'next-auth/react'



const Home = () => {
	const { data: session } = useSession()



	return (
		<Grid placeItems='center' gridRowGap='1rem'>
			{session ? (
				<>
					<Heading>Logged in as {session.user.email}</Heading>
          <Heading size='3xl'>
            Welcome to the Home Page.
          </Heading>
					
				</>
			) : (
				<>
					<Heading>You are not Logged in</Heading>
          <Heading size='lg'>Click the Login Button</Heading>

				
				</>
			)}
		</Grid>
	)
}

export default Home
