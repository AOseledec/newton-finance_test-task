import React from 'react'

const PostsPerPage = ({value, handleChange}: PostsPerPageProps) => {

  const handleChangeValue = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    handleChange(+event.target.value);
  };

  return (
    <label htmlFor="ppp">
      Posts per page: 
      <select value={`${value}`} id="ppp" onChange={handleChangeValue}>
        <option value="4">4</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </label>
  );
}

export interface PostsPerPageProps {
  value: number,
  handleChange: (value: number) => void
}

export default PostsPerPage;
