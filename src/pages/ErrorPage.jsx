import Lottie from "lottie-react";
import errorAnimation from "../../errorPage.json";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-blue-50">
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <div className="w-[60%] pt-5 mx-auto h-screen my-auto">
        <div>
          <Lottie className="border-4" animationData={errorAnimation} />
          <div className="flex justify-center mt-5">
            <Link to={"/"} className="btn btn-primary">
              Retun Home
            </Link>
          </div>
          <p className="text-center">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
