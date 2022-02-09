import React, { useCallback, useMemo } from 'react';

import styles from './Pagination.styles';

const itemsPerPage = 8;

/**
 * @param filteredBlogs
 * @param page
 * @param setPage
 * @returns {JSX.Element}
 * @constructor
 */

const Pagination = ({ filteredBlogs, page, setPage }) => {
  const onPrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const onNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const pageAmount = useMemo(() => Math.ceil(filteredBlogs.length / itemsPerPage), [filteredBlogs, itemsPerPage]);

  const currentPosts = useMemo(
    () => filteredBlogs.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [page, filteredBlogs]
  );

  return (
    <div css={styles}>
      {currentPosts.map((blog) => (
        <div key={blog.id}>
          <div>{blog.title}</div>
          <img src={blog?.acf?.large_image?.source_url} alt={blog.title} />
        </div>
      ))}
      <div>
        {page > 1 && <button onClick={onPrevPage}>Prev page {page - 1}</button>}
        {filteredBlogs.length && (
          <span>
            Page {page} of {pageAmount}
          </span>
        )}
        {pageAmount - 1 >= page && <button onClick={onNextPage}>Next page {page + 1}</button>}
      </div>
    </div>
  );
};

export default Pagination;
