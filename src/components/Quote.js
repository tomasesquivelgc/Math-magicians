import React, { useState, useEffect } from 'react';
import './Quote.css';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'aWjSOxjlUZMzuACOgdjfEA==oarjAfYParQOdUCb';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // to track whether the component is mounted or not

    const fetchQuote = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        const { quote, author } = data[0];

        if (isMounted) {
          setQuote(quote);
          setAuthor(author);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError('Error getting quote');
          setLoading(false);
        }
      }
    };

    fetchQuote();

    return () => {
      isMounted = false; // cleanup function to handle component unmounting
    };
  }, []);

  if (loading) {
    return <h2 className="loadingBody">Loading quote...</h2>;
  }

  if (error) {
    return <h2>Error getting quote</h2>;
  }

  return (
    <section className="quoteBody">
      <h2>Random Quote:</h2>
      <h3>{quote}</h3>
      <p>
        -
        {author}
      </p>
    </section>
  );
};

export default Quote;
