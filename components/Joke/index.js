import { useState } from "react";
import useSWR from "swr";

export default function Joke() {
  // const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  const { data, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  // useEffect(() => {
  //   async function startFetching() {
  //     const response = await fetch(
  //       `https://example-apis.vercel.app/api/bad-jokes/${id}`
  //     );
  //     const joke = await response.json();

  //     setJoke(joke);
  //   }

  //   startFetching();
  // }, [id]);

  function handlePrevJoke() {
    setId(data.prevId);
  }

  function handleNextJoke() {
    setId(data.nextId);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.joke}</h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
