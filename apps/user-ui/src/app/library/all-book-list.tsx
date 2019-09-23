import React, { useEffect, useState } from 'react'

import './all-book-list.scss'
import { getAll } from '../api/library-api'
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Book } from '@lutos-frontend/data-contract'

/* eslint-disable-next-line */
export interface AllBookListProps {
  skip: number;
  take: number;
}

export const AllBookList = (props: AllBookListProps) => {
  const [list, setList] = useState([] as Book[])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState({ current: 1, total: 1 })
  const [skip, setSkip] = useState(0)
  const [length, setLength] = useState(0)

  useEffect(() => {
    getAll(props.skip, props.take).then(res => {
      setList(res.data)
      const total = res.metadata.total
      setTotal(total)
      const totalPage = Math.ceil(total / props.take)
      const currentPage = Math.floor(res.metadata.skip / props.take) + 1
      console.log(currentPage)
      setPage({
        current: currentPage,
        total: totalPage
      })
      setSkip(res.metadata.skip)
      setLength(res.metadata.length)
    })
  }, [props.skip, props.take])

  return (
    <>
      <h2>My books ({total})</h2>

      <Table>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t, idx) => (
            <tr key={idx}>
              <td>{idx + 1 + skip}</td>
              <td>
                <img className="img-fluid" src={t.coverImageUrl} />
              </td>
              <td>
                <strong>{t.title}</strong>
              </td>
              <td>{t.author.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex align-items-center">
        <span>Showing {length} of {total}</span>
        <div className="ml-auto">
          <Pagination>
            <PaginationItem disabled>
              <PaginationLink href="#">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem active={page.current == 1}>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem active={page.current == 2}>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem active={page.current == 3}>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">Next</PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default AllBookList
