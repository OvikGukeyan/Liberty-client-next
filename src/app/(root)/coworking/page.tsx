import React, { FC } from "react";
import styles from "./coworking.module.scss";
import { CoworkingZone, Footer, Header } from "@/components";


const coworkingZones = [
  {
    name: "Konferenzraum (nur an Wochenenden verfügbar)",
    description:
      "Der perfekte Ort für Ihr wichtiges Event! Unser geräumiger Konferenzraum steht Ihnen ausschließlich an Wochenenden zur Verfügung, damit Sie Workshops, Schulungen oder Firmenveranstaltungen ohne Störungen durchführen können. Ausgestattet mit moderner Audio-Video-Technik, Hochgeschwindigkeitsinternet und komfortablen Möbeln, bietet dieser Raum die optimale Umgebung für Kommunikation und Lernen. Reservieren Sie frühzeitig, um Ihren idealen Termin für Ihr nächstes großes Ereignis zu sichern!",
    img: 'conf1',
    id: '1',
  },
  {
    name: "Konferenzraum (täglich verfügbar)",
    description:
      "Jeden Tag bereit für Geschäfte. Unser Konferenzraum ist täglich buchbar und bietet Flexibilität und Bequemlichkeit für all Ihre geschäftlichen Anforderungen. Ideal für Meetings, Präsentationen oder langfristige Projekte, der Raum ist mit allem ausgestattet, was Sie für Veranstaltungen auf höchstem Niveau benötigen. Verwalten Sie Ihre Events mit Leichtigkeit dank professioneller Ausrüstung und Unterstützung unseres Teams. Nutzen Sie die Möglichkeit, den Raum nach Ihrem Zeitplan zu buchen!",
    img: 'sonf2',

    id: '2',
  },
  {
    name: "Arbeitsbereich (täglich verfügbar)",
    description:
      "Gestalten Sie Ihren idealen Arbeitstag. Unser moderner Arbeitsbereich steht täglich für Fachleute aus allen Branchen zur Verfügung. Mit einem offenen Layout, das zahlreiche Arbeitsstationen, Entspannungszonen und Besprechungsecken bietet, können Sie wählen, wie und wo Sie arbeiten möchten. Hochgeschwindigkeitsinternet, 24-Stunden-Zugang und die Möglichkeit, Gleichgesinnte zu treffen, schaffen ideale Bedingungen für Produktivität und Kreativität. Treten Sie unserer Gemeinschaft bei und finden Sie Ihren Platz für Wachstum und Erfolg!",
    img: 'work_space',

    id: '3',
  },
];

const Coworking: FC = () => {
  return (
    <div className={styles.coworking}>
      <Header />
      <div className={styles.main}>
        <h1>Coworking-Zone</h1>
        {coworkingZones.map(item => <CoworkingZone key={item.id} item={item} />)}


      </div>
      <Footer isStatic={false} />
    </div>
  );
};

export default Coworking;
