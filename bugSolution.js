import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users/>} >
          <Route path=":userId" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function NotFound() {return <div>Not Found</div>}

function Users() {
  let params = useParams();
  console.log(params)
  return (
    <div>
      <h2>Users</h2>
      <Outlet/>
    </div>
  );
}

function UserProfile() {
  let params = useParams();
  return (
    <div>
      <h2>User Profile: {params.userId}</h2>
    </div>
  );
}
export default App;