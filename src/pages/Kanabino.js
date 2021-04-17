import PageHeader from "../base/PageHeader.js";
import { Helmet } from "react-helmet";

export default function Kanabino() {
  return (
    <>
      <Helmet>
        <title>KANABINOIDY</title>
      </Helmet>
      <PageHeader pageName="KANABINOIDY" />
      <div className="kanabino">
        <p>
          Skupina látek, jež má omamný účínek na receptory v mozku. Patří sem
          "drogy" připravované z rostliny konopí.
        </p>
        <table title="Tabulka kanabinoidů">
          <thead>
            <tr>
              <th>Kannabinoid</th>
              <th>Vzorec</th>
              <th>Legální?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>THC</td>
              <td>
                C<sub>21</sub>H<sub>30</sub>O<sub>2</sub>
              </td>
              <td>NE</td>
            </tr>
            <tr>
              <td>THCa</td>
              <td>
                C<sub>22</sub>H<sub>30</sub>O<sub>4</sub>
              </td>
              <td>NE</td>
            </tr>
            <tr>
              <td>CBD</td>
              <td>
                C<sub>21</sub>H<sub>30</sub>O<sub>2</sub>
              </td>
              <td>ANO</td>
            </tr>
            <tr>
              <td>CBN</td>
              <td>
                C<sub>21</sub>H<sub>26</sub>O<sub>2</sub>
              </td>
              <td>ANO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
