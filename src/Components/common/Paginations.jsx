import React from 'react'
import { Link } from 'react-router-dom'

const PaginationItem = ({ page, currentPage, url }) => (
    <li className={`page-item ${page === currentPage && 'active'}`}>
        <Link to={`${url}?page=${page}`} className="page-link">
            {page}
        </Link>
    </li>
)

function Paginations({ total, limit, url, currentPage }) {
    const pageCount = Math.ceil(total / limit)
    const pArr = []
    for (let i = 1; i < pageCount; i++) pArr.push(i)
    return (
        <ul className="pagination">
            {pArr.map((page) => (
                <PaginationItem
                    page={page}
                    currentPage={currentPage}
                    url={url}
                    key={page}
                />
            ))}
        </ul>
    )
}

export default Paginations
