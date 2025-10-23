// import Profile from './Profile.jsx' 
// import './App.css'

// function App() {
//   return (
//     <>
//        <Profile></Profile>
//     </>
//   );
// }

// export default App

import './App.css'
import Profile from './Profile.jsx';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Profile 
        image="/Image/Tife.JPG" 
        name="Adeleke kehinde" 
        role="AI Developer"
        about="Learning React to build amazing web apps in Nigeria."
      />

    
      <Profile 
        image="/Image/Bolu.JPG"
        name="Tife Adeleke" 
        role="Frontend Engineer"
        about="Passionate about creating modern, responsive web experiences."
      />
    </div>
  );
}

export default App;
