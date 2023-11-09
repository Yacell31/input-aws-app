// pages/index.tsx
import { submitToDynamoDB } from '@/utils/dynamoDB';
import { useState, FormEvent } from 'react';

const InputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await submitToDynamoDB(inputValue);
      console.log('Data submitted to DynamoDB!');
      setInputValue('');
    } catch (error) {
      console.error('Error submitting to DynamoDB:', error);
    }
  };


  return (
    <div className="container mx-auto mt-5 p-6 max-w-md bg-gray-100 rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">Enter Your Name</label>
          <input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your data"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
