"use client";
import React from 'react';
import SetCookiesFunc from '@/utils/SetCookieFunc';

const SetCookies = () => {
  const { data, cookie, handleOnChange, handleOnClick } = SetCookiesFunc();

  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Set Cookies</h1>

        {data.map(item => (
          <div key={item.id} className="mb-4">
            <label className="block text-gray-600 text-lg mb-1">{item.label}</label>
            <input
              className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
              name={item.key}
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              onChange={handleOnChange}
            />
          </div>
        ))}

        <button
          onClick={handleOnClick}
          className="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Set Cookie
        </button>

        {cookie.key && (
          <p className="mt-4 text-gray-700">
            Cookie set: Key: {cookie.key}, Value: {cookie.value}
          </p>
        )}
      </div>
    </div>
  );
};

export default SetCookies;

