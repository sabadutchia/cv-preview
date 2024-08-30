export default function GeneralInfo({
  sectionInformation,
  setSectionInformation,
}) {
  return (
    <div>
      <div className="title">Educational experience</div>
      <div className="form-fields">
        <label>
          School
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                school: e.target.value,
              })
            }
            type="text"
            name="school"
            autoComplete="false"
            defaultValue={sectionInformation?.school}
          />
        </label>
        <label>
          Title
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                title: e.target.value,
              })
            }
            type="text"
            name="title"
            autoComplete="false"
            defaultValue={sectionInformation?.title}
          />
        </label>
        <label>
          Date
          <input
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                date: e.target.value,
              })
            }
            type="text"
            name="date"
            autoComplete="false"
            defaultValue={sectionInformation?.date}
          />
        </label>
      </div>
    </div>
  );
}
