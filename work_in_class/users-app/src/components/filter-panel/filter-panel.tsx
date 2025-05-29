import { useUserContext } from "../../context/user-context";
import "./filter-panel.css";

export const FilterPanel = () => {
    const { gender, setGender, country, setCountry, users  } =  useUserContext();
  const countries = Array.from(new Set(users.map(user => user.location.country))).sort();


  const handleChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  return (
    <div className="filter-panel">
      <select name="country" value={country} onChange={handleChangeCountry}>
        <option value="all">Все страны</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select name="gender" value={gender} onChange={handleChangeGender}>
        <option value="all">Все</option>
        <option value="male">Мужчины</option>
        <option value="female">Женщины</option>
      </select>
    </div>
    );
};
