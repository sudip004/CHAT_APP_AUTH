

const Gender = ({ tochangeGender, selectGender  }) => {
  return (
    <div className="flex items-center">
      <div className="form-control">
        <label className={`cursor-pointer label ${selectGender==="male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectGender === "male"}
            onChange={()=>tochangeGender("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`cursor-pointer label ${selectGender==="female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={selectGender === "female"}
            onChange={()=>tochangeGender("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
