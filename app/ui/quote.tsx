export default async function Quote() {
  const quoteResponse = await fetch("https://zenquotes.io/api/random", {cache: "no-store"});
  const quote = await quoteResponse.json();
  return (
      <>
        <p>{quote[0].q}</p>
        <p>{quote[0].a}</p>
        <p>{quote[0].h}</p>
      </>
  )
}