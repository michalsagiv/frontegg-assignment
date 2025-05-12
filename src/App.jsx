import "./App.css";
import { useEffect } from "react";
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal } from "@frontegg/react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const openSettings = () => {
    AdminPortal.show();
  };


  if (isLoading) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial" }}>
      {isAuthenticated ? (
        <div>
          <h2>Logged in as {user?.name ?? user?.email}</h2>
          {console.log("Persmissions: ", user?.permissions, user?.roles)} {/* Log permissions and roles */}
          <img
            src={user?.profilePictureUrl ?? "/default-avatar.svg"}
            alt={user?.name ?? "avatar"}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
          
          <div style={{ marginTop: "1rem" }}>
            <button onClick={() => alert(user.accessToken)}>Show token</button>
            <button onClick={logout} style={{ marginLeft: "1rem" }}>
              Logout
            </button>
            <button onClick={openSettings} style={{ marginLeft: "1rem" }}>
              Settings
            </button>
          </div>
        </div>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
}

export default App;
