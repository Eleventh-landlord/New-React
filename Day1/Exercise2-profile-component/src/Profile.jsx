// function Profile (){
//     return (
//         <>
//           <img src="/Image/Adeleke.JPG" alt="My Image" />
//           <h2>Adeleke kehinde</h2>
//           <h3>Role: AI Developer</h3>
//           <p>My aim is to be the biggest star the world has ever known</p>

//         </>
//     );
// }

// export default Profile


function Profile({ image, name, role, about }) {
  return (
    <div>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
      />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{about}</p>
    </div>
  );
}

export default Profile;
