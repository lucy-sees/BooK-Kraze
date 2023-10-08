/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BackButton from '../components/backButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then((response) => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened. Please check console for more information.");
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Title</span>
              <input
                type='text'
                className='border-2 border-sky-500 px-4 py-2 w-full'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Author</span>
              <input
                type='text'
                className='border-2 border-sky-500 px-4 py-2 w-full'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Publish Year</span>
              <input
                type='text'
                className='border-2 border-sky-500 px-4 py-2 w-full'
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
              />
            </div>

            <div className='my-4'>
              <button
                className='p-2 bg-sky-300 m-auto w-full'
                onClick={handleSaveBook}
              >
                Save
              </button>
            </div>
          </div>
      )}
    </div>
  )
}

export default CreateBook
