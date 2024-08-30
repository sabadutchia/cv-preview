export default function GeneralInfo({
  sectionInformation,
  setSectionInformation,
}) {
  return (
    <div>
      <div className="title">Practical experience</div>
      <div className="form-fields">
        <label>
          Company name
          <input
            autoComplete="false"
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                companyName: e.target.value,
              })
            }
            type="text"
            name="companyName"
            defaultValue={sectionInformation.companyName}
          />
        </label>
        <label>
          Position
          <input
            autoComplete="false"
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                position: e.target.value,
              })
            }
            type="text"
            name="position"
            defaultValue={sectionInformation.position}
          />
        </label>
        <label>
          Responsabilities
          <input
            autoComplete="false"
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                responsabilities: e.target.value,
              })
            }
            type="text"
            name="responsabilities"
            defaultValue={sectionInformation.responsabilities}
          />
        </label>
        <label>
          Date from
          <input
            autoComplete="false"
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                dateFrom: e.target.value,
              })
            }
            type="text"
            name="dateFrom"
            defaultValue={sectionInformation.dateFrom}
          />
        </label>
        <label>
          Date until
          <input
            autoComplete="false"
            onChange={(e) =>
              setSectionInformation({
                ...sectionInformation,
                dateUntil: e.target.value,
              })
            }
            type="text"
            name="dateUntil"
            defaultValue={sectionInformation.dateUntil}
          />
        </label>
      </div>
    </div>
  );
}
