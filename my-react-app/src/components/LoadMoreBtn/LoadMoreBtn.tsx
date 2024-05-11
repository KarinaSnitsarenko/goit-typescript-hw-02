// // LoadMoreBtn.tsx
// import React from "react";
// import css from "./LoadMoreBtn.module.css";

// interface LoadMoreBtnProps {
//   onLoadMore: () => void;
// }

// const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
//   return (
//     <div className={css.loadMore}>
//       <button onClick={onLoadMore} className={css.loadMoreButton} type="button">
//         {/* Load more ⬇️ */}
//       </button>
//     </div>
//   );
// };

// export default LoadMoreBtn;

import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.containerBtn}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more ⬇️
      </button>
    </div>
  );
};

export default LoadMoreBtn;
