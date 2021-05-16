import { connectPagination } from "react-instantsearch-dom";

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <div className="text-center overflow-x-scroll py-3">
    <ul className="inline-flex">
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1;
        const style = {
          fontWeight: currentRefinement === page ? "bold" : "",
        };

        return (
          <li key={index} className="">
            <a
              href={createURL(page)}
              onClick={(event) => {
                event.preventDefault();
                refine(page);
              }}
            >
              <span
                className="mr-1 sm:mr-2 text-xs sm:text-sm rounded py-1 px-2 sm:px-4 bg-white uppercase font-light text-purplePrimary"
                style={style}
              >
                {page}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
