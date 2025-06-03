import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Programs = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");

    return rows as Programs[];
  }
}

export default new ProgramRepository();
