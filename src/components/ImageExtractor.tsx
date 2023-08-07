import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FiSearch } from 'react-icons/fi';
import { DefaultCard } from './DefaultCard';
import ErrorMessageCard from './ErrorMessageCard';

interface ApiResponse {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export const ImageExtractor: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = () => {
    const inputElement = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;
    const searchText = inputElement.value.trim();

    if (searchText === '') {
      setErrorMessage('Please type somenthing. Example: Cars.');

      //checking return....REMINDER...
      console.log('errorMessage:', errorMessage);
      return;
    }

    axios
      .get<{ results: ApiResponse[] }>(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: '0O54haFWsqNW3qjna5XPtpFP68GHDEFiu4YGCh6kp7s',
            query: searchText,
          },
        },
      )
      .then((response: AxiosResponse<{ results: ApiResponse[] }>) => {
        const results = response.data.results;
        if (results.length === 0) {
          setErrorMessage('Nothing found.');
        } else {
          const urls = results.map((image) => image.urls.regular);
          setImageUrls(urls);
          setErrorMessage(null);
        }
      })
      .catch((error) => {
        console.log('Error happened during fetching!', error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-h-{800px} p-10 bg-slate-900 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome to Image Extractor</h1>

      {/* reminder for the error props and console .... */}

      {errorMessage && (
        <ErrorMessageCard
          color="red"
          position="top-right"
          errorMessage={errorMessage}
          message={errorMessage}
        />
      )}
      <div className="flex mb-4">
        <input
          id="searchInput"
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
          onKeyPress={handleKeyPress}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r flex items-center"
          onClick={handleSearch}>
          <FiSearch className="mr-2" />
          Search Images
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {imageUrls.map((imageUrl) => (
          <DefaultCard key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};
