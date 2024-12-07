import Raisestyles from "./RaiseTicket.module.css";
import styles from "../../HelpAndSupport.module.css";
import { ICONS } from "../../../../Assets/Icons";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";

const RaiseTicket = () => {
  const navigate = useNavigate();

  const RaiseTicketData = [
    {
      ticketHeading: "Issue with transaction of Rs. 3000.0",
      ticketID: "0123456789",
      time: "Mon, 3 Jun at 05:39 PM",
      status: "Active",
    },
    {
      ticketHeading: "Issue with transaction of Rs. 1500.0 from Account",
      ticketID: "0123456789",
      time: "Tue, 4 Jun at 05:39 PM",
      status: "Closed",
    },
    {
      ticketHeading: "Issue with transaction of Rs. 3000.0",
      ticketID: "0123456789",
      time: "Mon, 3 Jun at 05:39 PM",
      status: "Active",
    },
    {
      ticketHeading: "Issue with transaction of Rs. 3000.0",
      ticketID: "0123456789",
      time: "Mon, 3 Jun at 05:39 PM",
      status: "Closed",
    },
  ];

  return (
    <>
      <Header title='Help & Support' />
      <div className={Raisestyles.RaiseTicket_container}>
        <div className={Raisestyles.RaiseTicket_first_data}>
          <h2 className={Raisestyles.RaiseTicket_Heading}>
            <span className={styles.Raisestyles} onClick={()=>navigate("/support")}>{ICONS.LeftArrowIcon}</span>
            Raise a Ticket
          </h2>
          <div className={styles.create_ticket}>

            <span>{ICONS.AddIconBlue} </span>

            <p>Create a support ticket</p>

          </div>
        </div>
        <div className={Raisestyles.RaiseTicket_first_data}>
          <h2 className={Raisestyles.RaiseTicket_Heading}>Support History</h2>
          {RaiseTicketData.map((item, index) => (
            <div className={styles.ticket_card} key={index}>
              <h2>{item.ticketHeading}</h2>
              <p>
                Ticket ID: <span>{item.ticketID}</span>
              </p>
              <div className={styles.ticket_card_data}>
                <p className={styles.time}>{item.time}</p>
                <p>
                  {item.status === "Active" ? (
                    <span className={styles.status_active}>
                      {ICONS.NotificationActiveIcon}Active
                    </span>
                  ) : (
                    <span className={styles.status_close}>
                      {ICONS.NotificationCloseIcon}Closed
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RaiseTicket;
