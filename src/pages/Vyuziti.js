import PageHeader from "../base/PageHeader.js";
import { Helmet } from "react-helmet";

export default function about() {
  return (
    <>
      <Helmet>
        <title>VYUŽITÍ</title>
      </Helmet>
      <PageHeader pageName="VYUŽITÍ" />
      <div className="box">
        <main>
          <section>
            <h2>Papírnicví</h2>
            <p>
              Zpracováním rostliny vznikají dlouhá nebo krátká vlánka, ze
              kterých se vyrábí papír. Dlouhé slouží pro kvalitní finální
              produkt, jako jsou knihy, časopisy, bankovy atd., zatímco kratší k
              výrobě toaletního papíru či ubrousků.
            </p>
          </section>
          <section>
            <h2>Stavebnictví</h2>
            <p>
              Zvápněním a slisováním drti z konopných stonků vznikne materiál
              pevný jako jako beton, ale sedmkrát lehčí a pružnejší, s lepší
              odolností vůči přírodním podmínkám a o dost lepší izolací.
            </p>
          </section>
          <section>
            <h2>Potravinářství</h2>
            <p>
              Z konopí májí pro Potravinářství největší hodnotu semínka, která
              mohou být použita na výrobu müsli, pečiva, nebo je z nich možno
              vylisovat olej. Má lehce ořechovou chuť a je považován za jeden z
              nejcennějších olejů, díky vysokému obsahu kyseliny gamma-linolové.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
