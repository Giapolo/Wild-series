import { useEffect, useState } from "react";

interface ProgramsInterface {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programList, setProgramList] = useState<ProgramsInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setProgramList(data));
  }, []);

  return (
    <>
      {programList.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.synopsis}</p>
        </div>
      ))}
    </>
  );
}
export default Programs;
