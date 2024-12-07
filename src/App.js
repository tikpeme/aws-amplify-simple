import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";

const client = generateClient();

function App() {
  const { signOut } = useAuthenticator();

  // ...

  return (
    <main>
      {/* ... */}
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
