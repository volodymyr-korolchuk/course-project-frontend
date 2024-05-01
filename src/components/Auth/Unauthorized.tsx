import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ROUTES } from "@/api";

const Unauthorized = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-6xl font-semibold">Unauthorized</h2>
      <p>you are not allowed to visit this page.</p>
      <Link className="pt-2" to={ROUTES.signIn}>
        <Button>Sign In</Button>
      </Link>
    </div>
  );
};

export default Unauthorized;
