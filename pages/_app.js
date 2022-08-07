import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, Grid } from '@chakra-ui/react'

import Layout from '../components/NavBar/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<ChakraProvider>
      <Layout>
				<Grid
					sx={{
						h: '100vh',
						placeItems: 'center',
						px: '5rem',
						textAlign: 'center',
					}}
				>
        
					<Component {...pageProps} />
          
        </Grid>
        </Layout>
			</ChakraProvider>
		</SessionProvider>
	)
}

export default MyApp
