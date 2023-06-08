import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'aWjSOxjlUZMzuACOgdjfEA==oarjAfYParQOdUCb';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        const { quote, author } = data[0];
        setQuote(quote);
        setAuthor(author);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <h2>Loading quote...</h2>;
  }

  if (error) {
    return <h2>Error getting quote</h2>;
  }

  return (
    <div>
      <h2>Random Quote:</h2>
      <h3>{quote}</h3>
      <p>
        -
        {author}
      </p>
    </div>
  );
};

export default Quote;
