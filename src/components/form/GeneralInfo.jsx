export default function GeneralInfo({
  sectionInformation,
  setSectionInformation,
}) {
  return (
    <div>
      <div className="title">General Information</div>
      <div className="form-fields">
        <label>
          Name
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                name: e.target.value,
              })
            }
            type="text"
            name="name"
            defaultValue={sectionInformation.name}
            autoComplete="false"
          />
        </label>
        <label>
          Email
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                email: e.target.value,
              })
            }
            type="text"
            name="email"
            defaultValue={sectionInformation.email}
            autoComplete="false"
          />
        </label>
        <label>
          Phone number
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                phoneNumber: e.target.value,
              })
            }
            type="text"
            name="phoneNumber"
            defaultValue={sectionInformation.phoneNumber}
            autoComplete="false"
          />
        </label>
      </div>
    </div>
  );
}
