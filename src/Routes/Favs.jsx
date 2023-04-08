import React from "react";
const Favs = () => {
  const dentistsFavs = JSON.parse(localStorage.getItem('dentistsFavs')) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistsFavs.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            email={dentist.email}
            phone={dentist.phone}
            website={dentist.website}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
