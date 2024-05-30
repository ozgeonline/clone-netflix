// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../utils/auth";
// import { GetServerSidePropsContext } from "next";

// export const checkSessionAndRedirect = async (context: GetServerSidePropsContext) => {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   console.log("Session:", session); // Debug log
//   if (session) {
//     console.log("Redirecting to /home");
//     return {
//       redirect: {
//         destination: "/home",
//         permanent: false,
//       },
//     };
//   }
//   console.log("Redirecting to /tr-en");
//   return {
//     redirect: {
//       destination: "/tr-en",
//       permanent: false,
//     },
//   };
// };
