import styles from "./HelpAndSupport.module.css";

import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";

import { ICONS } from "../../Assets/Icons";
import { Link, Outlet } from "react-router-dom";
import FAQsList from "./Components/FAQs/FAQsList";

const HelpAndSupport = () => {
  const ticketCardData = [
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
  ];

  const ArticleCardData = [
    {
      image: "/Assets/Help&Support/Article_Images/cloud_1.svg",
      cardTitle: "How to Get Started with Our Platform",
      cardPara:
        "Learn the basics of using our platform, from creating an account to navigating the dashboard.",
    },
    {
      image: "/Assets/Help&Support/Article_Images/project_2.svg",
      cardTitle: "Managing Your Projects Efficiently",
      cardPara:
        "Tips and tricks for managing your projects, including task assignment and progress tracking.",
    },
    {
      image: "/Assets/Help&Support/Article_Images/pricing_3.svg",
      cardTitle: "Understanding Our Pricing Structure",
      cardPara:
        "A detailed guide to our pricing model, including subscription options and payment methods.",
    },
    {
      image: "/Assets/Help&Support/Article_Images/profile_4.svg",
      cardTitle: "Optimizing Your Profile for Better Engagement",
      cardPara:
        "Best practices for setting up and optimizing your profile to attract more clients.",
    },
    {
      image: "/Assets/Help&Support/Article_Images/communication_5.svg",
      cardTitle: "Using Our Communication Tools",
      cardPara:
        "How to effectively use the chat, call, and messaging features on our platform to stay connected with clients.",
    },
    {
      image: "/Assets/Help&Support/Article_Images/satisfaction_6.svg",
      cardTitle: "Tips for Ensuring Client Satisfaction",
      cardPara:
        "Strategies to ensure your clients are happy and satisfied with your services.",
    },
  ];

  return (
    <div>
      <Header title="Help & Support" />
      <div className={styles.Support_Container}>
        <p>Hi Prakash, We’re here to help</p>
        <p>
          Need assistance? Our Help and Support section has you covered. Whether
          you're looking for answers in our FAQs, reading through helpful
          articles, or need direct assistance, we're here for you. Raise a
          ticket, chat with us, or give us a call—our dedicated team is ready to
          ensure you get the support you need quickly and efficiently.
        </p>
        <div className={styles.footer_buttons}>
          <Button
            // width="50%"
            padding="10px 30px"
            text="Chat with us"
            backgroundColor="#FED462"
            color="#0D0D0D"
          />
          <p className={styles.call}>
            {ICONS.callIcon}
            <span className={styles.Support_call}>+91 01234 56789</span>
          </p>
          <p className={styles.mail}>
            {ICONS.mailIconBlack}
            <span className={styles.Support_mail}>Connect123@gmail.com</span>
          </p>
        </div>
      </div>


      <div className={styles.ticket_header}>
        <h2 className={styles.card_Heading}>FAQs</h2>
      </div>

      <FAQsList />

      <div className={styles.ticket}>
        <div className={styles.ticket_header}>
          <h2>View Tickets</h2>
          <Link className={styles.link} to="../allTickets">See all</Link>
        </div>
        <Outlet />
        <div className={styles.ticket_container}>
          <div className={styles.create_ticket}>

            <span>{ICONS.AddIconBlue} </span>

            <p>Create a support ticket</p>

          </div>
          {ticketCardData.map((item, index) => (
            <div className={styles.ticket_card} key={index}>
              <h2>
                {item.ticketHeading.length > 30
                  ? `${item.ticketHeading.substring(0, 30)}....`
                  : item.ticketHeading}
              </h2>
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

      <div className={styles.ticket_header}>
        <h2 className={styles.card_Heading}>Articles</h2>
      </div>
      <div className={styles.Articles_Data}>
        {ArticleCardData.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt="Avatar" className={styles.card_img} />
            <div className={styles.card_data}>
              <div className={styles.card_child_data}>
                <h2 className={styles.card_title}>{item.cardTitle}</h2>
                <p className={styles.card_para}>{item.cardPara}</p>
              </div>
              <span className={styles.card_btn}>
                Read more{ICONS.ArrowRightIcon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpAndSupport;
