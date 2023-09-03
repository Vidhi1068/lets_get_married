
import React from 'react'
import { Box, Card, FormControl, FormLabel, Grid, Heading, Input, Text } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

function Login() {

  const methods = useForm()

  const onSubmit=()=>{

  }

  return (
    <Card>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box>
            <Grid templateColumns='repeat(2, 1fr)' >

              <Heading>Login</Heading>
              <Text>No accounts ? Sign in  </Text>

            </Grid>
          </Box>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input placeholder='username'/>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder='password'/>
          </FormControl>

          <Box>
            <Text>forgot password</Text>
          </Box>
      </form>
    </FormProvider>
  </Card>
  )
}

export default Login
