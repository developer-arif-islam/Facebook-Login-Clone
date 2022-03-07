import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 py-36 px-72 h-screen">
      <Head>
        <title>Facebook - log in or sign up</title>
        <link rel="icon" href="https://www.facebook.com/favicon.ico" />
      </Head>
     <div className="flex justify-between items-center">
        <div className="max-w-lg">
          <img className="w-72 -mb-2" src="logo.svg" alt="logo" />
          <h3 className="px-7 pb-24 text-2xl leading-8">Facebook helps you connect and share with the people in your life.</h3>
        </div>
        <div>
          <form action="/" method="post" className="max-w-sm p-4 bg-white shadow-lg rounded-md">
            <input id="email" className="p-3 mb-3 w-full border border-gray-300 rounded-md focus:shadow-sm outline-blue-400" type="email" placeholder="Email address or phone number" required/>  
            <input className="p-3 mb-3 w-full border border-gray-300 rounded-md focus:shadow-sm outline-blue-400" type="password" placeholder="Password" required/>  
            <button type="submit" className="p-2 mb-4 w-full bg-blue-600 text-white text-xl font-bold rounded-md transition-all hover:bg-blue-700">Log In</button>
            <a href="javascript:void(0)" className="mb-3 text-blue-600 text-sm text-center block hover:underline">Forgotten password?</a>
            <hr />
            <button type="button" className="px-4 py-3 mb-3 mt-7 m-auto bg-green-600 text-white text-lg font-semibold rounded-md block transition-all hover:bg-green-700">Create New Account</button>
          </form>
          <h3 className="mt-7 text-center text-sm"><span className="font-bold">Create a Page</span> for a celebrity, brand or business.</h3>
        </div>
      </div>
    </div>
  )
}


export default Home
