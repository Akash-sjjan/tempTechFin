// import React from "react";

// const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         <li key={1} className="page-item">
//           <a onClick={() => paginate(1)} href="!#" className="page-link">
//             {-1}
//           </a>
//         </li>
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <a onClick={() => paginate(number)} href="!#" className="page-link">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

import React, { useEffect, useState } from "react";
import { fastforward, fastback, back, next } from "./assets";
import "./App.css";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
  currentPage: number;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: Props) => {
  const [backDisable, setBackDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [forwardDisable, setForwardDisable] = useState(false);
  const [backwardDisable, setBackwardDisable] = useState(false);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  console.log("totalPages", totalPages);

  useEffect(() => {
    console.log("currentPage", currentPage);
    const re = async () => {
      if (currentPage <= 1) {
        console.log("disBackkkkkkkkkkkkkkk", currentPage);

        await setBackDisable(true);
        await setBackwardDisable(true);
      }
      if (currentPage > totalPages) {
        console.log(
          "disNexttttttttttttttttttttttttttttttttttttttt",
          currentPage
        );
        await setNextDisable(true);
        await setForwardDisable(true);
      }
    };
    re();
  }, [backDisable, nextDisable, forwardDisable, backDisable, currentPage]);

  return (
    <nav>
      <ul className="CL-pagination-container">
        <li key={-2} className="page-item page-backward">
          <a
            onClick={() => paginate(1)}
            href="!#"
            className="page-link"
            style={{
              pointerEvents: currentPage <= 1 ? "none" : "auto",
            }}
          >
            <img src={fastback} alt="backward" className="page-img" />
          </a>
        </li>
        <li key={-1} className="page-item page-back">
          <a
            onClick={() => paginate(currentPage - 1)}
            href="!#"
            className="page-link"
            style={{ pointerEvents: currentPage <= 1 ? "none" : "auto" }}
          >
            <img src={back} alt="previous" className="page-img" />
          </a>
        </li>
        {currentPage > 3 ? (
          <div className="CL-ddd-c">
            {pageNumbers.map((number) => {
              if (number === 1 || number === 2) {
                return (
                  <li
                    key={number}
                    className={`page-item page-item-${
                      number === currentPage ? "active" : "none"
                    }`}
                  >
                    <a
                      onClick={() => paginate(number)}
                      href="!#"
                      className="page-link"
                    >
                      {number}
                    </a>
                  </li>
                );
              }
            })}
            <li key={-8} className="page-item page-item-dots">
              <a
                onClick={() => {}}
                href="!#"
                className="page-link"
                style={{ pointerEvents: "none" }}
              >
                ...
              </a>
            </li>
          </div>
        ) : null}
        {pageNumbers.map((number) => {
          if (
            // number === totalPages - 1 &&
            number === currentPage - 1 ||
            number === currentPage ||
            number === currentPage + 1
          ) {
            return (
              <li
                key={number}
                className={`page-item page-item-${
                  number === currentPage ? "active" : "none"
                }`}
              >
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          }
        })}
        {currentPage < totalPages - 1 ? (
          <div className="CL-ddd-c">
            <li key={-8} className="page-item page-item-dots">
              <a
                onClick={() => {}}
                href="!#"
                className="page-link"
                style={{ pointerEvents: "none" }}
              >
                ...
              </a>
            </li>
            {pageNumbers.map((number) => {
              if (number === totalPages - 1 || number === totalPages) {
                return (
                  <li
                    key={number}
                    className={`page-item page-item-${
                      number === currentPage ? "active" : "none"
                    }`}
                  >
                    <a
                      onClick={() => paginate(number)}
                      href="!#"
                      className="page-link"
                    >
                      {number}
                    </a>
                  </li>
                );
              }
            })}
          </div>
        ) : null}
        <li key={-3} className="page-item page-next">
          <a
            onClick={() => paginate(currentPage + 1)}
            href="!#"
            className="page-link"
            style={{
              pointerEvents: currentPage >= totalPages ? "none" : "auto",
            }}
          >
            <img src={next} alt="next" className="page-img" />
          </a>
        </li>
        <li key={-4} className="page-item page-forward">
          <a
            onClick={() => paginate(totalPages)}
            href="!#"
            className="page-link"
            style={{
              pointerEvents: currentPage >= totalPages ? "none" : "auto",
            }}
          >
            <img src={fastforward} alt="fastforward" className="page-img" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
