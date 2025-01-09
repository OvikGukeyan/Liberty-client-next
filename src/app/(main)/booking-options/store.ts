import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Room } from "../checkout/page";



interface CurrentRoomState {
    currentRoom: Room;
    setCurrentRoom: (room: Room) => void;

}

export const useCurrentRoomStore = create<CurrentRoomState>()(
    persist(
        immer((set) => ({
            currentRoom: {
                name: "Konferenzraum (nur an Wochenenden verfügbar)",
                description:
                    "Der perfekte Ort für Ihr wichtiges Event! Unser geräumiger Konferenzraum steht Ihnen ausschließlich an Wochenenden zur Verfügung, damit Sie Workshops, Schulungen oder Firmenveranstaltungen ohne Störungen durchführen können. Ausgestattet mit moderner Audio-Video-Technik, Hochgeschwindigkeitsinternet und komfortablen Möbeln, bietet dieser Raum die optimale Umgebung für Kommunikation und Lernen. Reservieren Sie frühzeitig, um Ihren idealen Termin für Ihr nächstes großes Ereignis zu sichern!",
                img: 'conf1',
                id: '1',
            },
            setCurrentRoom: (room) =>
                set((state) => {
                    state.currentRoom = room
                }),

        })),
        {
            name: 'room-storage',
        }
    )
);