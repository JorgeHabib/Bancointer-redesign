// import { FC, memo, ReactNode } from 'react';

// const withMemo = (Component: ReactNode, checkedProps: Array<string>): FC => {
//   function areEqual(prevProps, nextProps): boolean {
//     return checkedProps.every((checkedProp): boolean => {
//       return (
//         JSON.stringify(prevProps[checkedProp]) ===
//         JSON.stringify(nextProps[checkedProp])
//       );
//     });
//   }

//   return memo(Component, areEqual);
// }

// export default withMemo;
export default () => { };
