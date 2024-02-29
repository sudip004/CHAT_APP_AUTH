

const Gender = () => {
  return (
    <div className="flex items-center">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-accent"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-accent"
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
