import { Route, Routes } from "react-router-dom"
import Payment from "./pages/Payment"
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Payment />} />
        </Routes>
      )}
    </>
  )
}

export default App
