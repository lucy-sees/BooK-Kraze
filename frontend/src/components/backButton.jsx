import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

BackButton.propTypes = {
  destination: PropTypes.string.isRequired, // Define the PropTypes for 'destination'
};

export default BackButton