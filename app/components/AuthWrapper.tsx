// // utils/authServer.ts
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../utils/auth";
// import { GetServerSidePropsContext } from "next";

// export const checkSessionAndRedirect = async (context: GetServerSidePropsContext) => {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   if (session) {
//     return {
//       redirect: {
//         destination: "/home",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };
