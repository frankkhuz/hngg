import AttendeeDetails from "@/AttendeDetails";
import Navbar from "@/NavBar";
import TicketReady from "@/TicketReady";
import TicketSelection from "@/TicketSelection";

export default function Home() {
  return (
    <div>
      <TicketSelection />
      {/* <AttendeeDetails />
      <TicketReady /> */}
    </div>
  );
}
