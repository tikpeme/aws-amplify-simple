import React from "react";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <AmplifyProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Welcome, {user?.username}</h1>
            <button onClick={signOut}>Sign Out</button>
          </div>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
}

export default App;
