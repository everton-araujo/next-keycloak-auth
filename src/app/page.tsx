import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "../components/Login";
import Logout from "../components/Logout";
import CustomLogin from "@/components/CustomLogin";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center">
      <h1 className="text-white font-bold text-2xl">Bem vindo</h1>
    </div>
  );

  // if (session) {
  //   return (
  //     <div>
  //       <p>Olá {session?.user?.name}</p>
  //       <p>email: {session?.user?.email}</p>
  //       <Logout />
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <Login />
  //     {/* <CustomLogin /> */}
  //   </div>
  // );
}
