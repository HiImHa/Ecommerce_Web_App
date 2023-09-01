export default function Home() {
  return (
    <main className="p-4">
      <h1>Home Page</h1>
      <div className={'bg-blue-500 w-screen h-screen flex items-center'}>
        <div className="text-center w-full">
          <button className={"bg-white p-2 px-4 rounded-lg"}> Login with Google</button>
        </div>
      </div>
    </main>

  )
}
