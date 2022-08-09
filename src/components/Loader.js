import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      { loading ? <h2>Loading...</h2> : <h3>Loaded!</h3>}
    </>
  );
}
 
export default Loader;