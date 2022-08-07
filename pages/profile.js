
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import {Heading} from '@chakra-ui/react'


const Profile = () => {
  const {data:session} = useSession();
  const {push} = useRouter();
  
  if(!session){
    setTimeout(() =>{
      push('/')
    },3000)
    
    return (<><Heading>
      You are not LoggedIn to Access this page. 
    </Heading>
    <Heading size='sm'>Redirecting you back to HomePage</Heading></>)
  }
  return (
    <div>
      <Heading>Welcome to Profile Page</Heading>
      
    </div>
  )
}

export default Profile