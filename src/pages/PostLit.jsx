import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllData } from '../ApiController/api';
import DataTable from './DataTable';

const PostLit = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: () => getAllData(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  return (
    <>
      <div>
        <DataTable data={data} />
      </div>
    </>
  );
};

export default PostLit;
