"use client";


export default async function Home() {
  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/home")
  }
  return (
    <>
    <div className="mt-4">
        <ul className="flex space-x-5 justify-center">
          <li>Home</li>
          <li>Profile</li>
          <li>Login</li>
        </ul>
    </div>
    <div className="text-center mt-72">
      <button onClick={handleSetCookie} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
       Set-Cookie
      </button>
      
    </div>
    </>
  );
}
