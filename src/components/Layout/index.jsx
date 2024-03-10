import { Suspense, useEffect } from "react";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectError, selectIsLoading } from "store/appState/appStateSelectors";
import Loader from "components/Loader";
import { notiflixMessage } from "utils/notiflixMessages";

function Layout() {
  const isLoader = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    error && notiflixMessage("error", error);
  }, [error]);
  return (
    <>
      <Header />
      <main>
        {isLoader && <Loader />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
